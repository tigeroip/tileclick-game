const helper = require("./config/functions");
const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

    const MAXTILES = 5; // max amount of activated tiles per game
    let games = new Array();
    let activeGames = new Map();


io.on("connection", socket => {

  socket.on("checkgameinfo", data => {

    // if user selectecs to join a game
    if (data.joingame) {
      // check to see if there is at least one game that exist
      if (games.length > 0) {
        // search games array
        games.forEach(game => {
          // locate the game element matching requested game name
          if (game.gamename == data.gamename) {
            // if the game has less than 2 players
            if (game.players.length < 2) {
              // add the socket to the number of players
              game.players.push(socket.id)
              game.playertwo = data.playername
              socket.emit("gotogameboard", "true")
            }
            // if game has more than 1 player
            else {
              socket.emit("formerror", "Game is full")
            }
          }
          // if no game with that name exists
          else {
            socket.emit("formerror", "Game does not exist")
          }
        })
      }
      // player cannot join a game if no games exist in the games array at all
      else {
        socket.emit("formerror", "Game does not exist")
      }
    }

    //check if the gamename is not already taken
    if (data.newgame) {
      if (games.length === 0) {
        games.push({players:[socket.id], gamename:data.gamename, playerone: data.playername})
        socket.emit("gotogameboard", "true")
      }
      else {
        //search games to make sure the gamename does not conflict with existing one
        games.forEach(game => {
          if (game.gamename == data.gamename) {
            socket.emit("formerror", "Sorry, that game name is taken")
          }
          else {
            games.push({players:[socket.id], gamename:data.gamename, playerone: data.playername})
            socket.emit("gotogameboard", "true")
          }
        })
      }
    }
  })

  socket.on("score", data => {
    //the total time it took the player to click on a tile from the moment it became active
    let clickDelay = data.hit - data.starttime;
    let areBothPlayersDelaysReceived = false;
    let getGameData = (gameID) => {return activeGames.get(gameID)};
    let gameID = data.gameid;
    let gameData = getGameData(gameID);

    try {
      //assign the delay in mouseclick to the corresponding player
      (gameData.playerOneSocketId == socket.id) ? gameData.playerOneDelay = clickDelay : gameData.playerTwoDelay = clickDelay

      //check if both players delays have been received
      if (gameData.playerOneDelay > 0 && gameData.playerTwoDelay > 0) {
        areBothPlayersDelaysReceived = true;
      }
    }
    catch(error) {
      console.log(error)
    }

    if (areBothPlayersDelaysReceived === true) {
      //calculate score
      if (gameData.playerOneDelay < gameData.playerTwoDelay) {
        gameData.playerOneScore++;
        gameData.playerOneDelay = 0;
        gameData.playerTwoDelay = 0;
        if ((gameData.playerOneScore + gameData.playerTwoScore) < MAXTILES) {
          helper.sendScore(gameData.playerOneSocketId, gameData.playerOneScore, io);
          helper.sendOpponentScore(gameData.playerTwoSocketId, gameData.playerOneScore, io);
          setTimeout(() =>helper.sendNewTilePosition(gameData.playerOneSocketId, gameData.playerTwoSocketId, io) ,Math.random() * (2000 - 500) + 500)
        }
        if ((gameData.playerOneScore + gameData.playerTwoScore) === MAXTILES) {
          io.to(gameData.playerOneSocketId).emit('gamefinished', {gotopostgame: true})
          io.to(gameData.playerTwoSocketId).emit('gamefinished', {gotopostgame: true})
        }
      }
      if (gameData.playerTwoDelay < gameData.playerOneDelay) {
        gameData.playerTwoScore++;
        gameData.playerOneDelay = 0;
        gameData.playerTwoDelay = 0;
        if ((gameData.playerOneScore + gameData.playerTwoScore) < MAXTILES) {
          helper.sendScore(gameData.playerTwoSocketId, gameData.playerTwoScore, io);
          helper.sendOpponentScore(gameData.playerOneSocketId, gameData.playerTwoScore, io);
          setTimeout(() =>helper.sendNewTilePosition(gameData.playerOneSocketId, gameData.playerTwoSocketId, io) ,Math.random() * (2000 - 500) + 500)
        }
        if ((gameData.playerOneScore + gameData.playerTwoScore) === MAXTILES) {
          io.to(gameData.playerOneSocketId).emit('gamefinished', {gotopostgame: true})
          io.to(gameData.playerTwoSocketId).emit('gamefinished', {gotopostgame: true})
        }
      }
    }
   
  })

  // when client indicates it is ready for the game to begin
  socket.on("ready", data => {
    let index = -1;
    games.forEach((game, i) => {
      // first check if the game has 2 players
      if (game.players.length == 2) {
        game.players.forEach((player, j) => {
          if (player == socket.id) {
            index = i;
          }
        })
      }
    })
    if (index > -1) {
      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      let gameId = uuidv4();
      let playerOne = games[index].players[0];
      let playerTwo = games[index].players[1];
      let gameData = {
        playerOneSocketId : games[index].players[0],
        playerOneName : games[index].playerone,
        playerTwoSocketId : games[index].players[1],
        playerTwoName : games[index].playertwo,
        playerOneDelay : 0,
        playerTwoDelay : 0,
        playerOneScore : 0,
        playerTwoScore :0
      }
      activeGames.set(gameId, gameData);
      helper.sendGameId(gameId, playerOne, playerTwo, io)
      helper.sendPlayerName(playerOne, games[index].playertwo, io)
      helper.sendPlayerName(playerTwo, games[index].playerone, io)
      helper.sendNewTilePosition(playerOne, playerTwo, io)
    }
    })

socket.on('postgame', (data) => {
  for (var [key, game] of activeGames) {
    if (game.playerOneSocketId == socket.id) {
      if (game.playerOneScore > game.playerTwoScore) {
        socket.emit('postgame',{winner:1,score:game.playerOneScore})
      }
      if (game.playerOneScore < game.playerTwoScore) {
       socket.emit('postgame',{winner:0,score:game.playerOneScore})
      }
      if (game.playerOneScore == game.playerTwoScore) {
        socket.emit('postgame',{winner:2,score:game.playerOneScore})
      }
    }
    if (game.playerTwoSocketId == socket.id) {
      if (game.playerTwoScore > game.playerOneScore) {
        socket.emit('postgame',{winner:1,score:game.playerTwoScore})
      }
      if (game.playerTwoScore < game.playerOneScore) {
       socket.emit('postgame',{winner:0,score:game.playerTwoScore})
      }
      if (game.playerTwoScore == game.playerOneScore) {
        socket.emit('postgame',{winner:2,score:game.playerTwoScore})
      }
    }
  }
})

    // handles cleaning up of the games array when socket disconnects
  socket.on('disconnect', () => {

    games.forEach((game, index) => {
      // if only one players disconnects from the game
      if (game.players.length == 2) {
        for(let i = 0; i < game.players.length; i++) {
          if (game.players[i] == socket.id) {
            //remove that player from the list of players
            game.players.splice(i, 1)
          }
        }
      }
      // if the game has only 1 player and that player disconnects
      if (game.players.length == 1) {
          if (game.players == socket.id) {
            // delete the game and update the array length
            games.splice(index, 1);
        }
      }
    })
  });


});



nextApp.prepare().then(() => {
  app.get("/roomname", (req, res) => {
    res.json(specifiedRooms);
  });

  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
