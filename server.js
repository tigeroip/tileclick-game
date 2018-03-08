const helper = require("./config/functions");
const Promise = require("promise");

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

    let games = new Array();
    let activeGames = new Array();


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
    let playerDelay = data.hit - data.starttime;
    
    activeGames.map((game, i) => {
     game.map((player, j) => {
       if (player === socket.id) {
         activeGames[i][j] = [socket.id, playerDelay, 0]
       }
     })
    })

    // Verifies that both players score has been received
    activeGames.map((game, i) => {
      game.map((player, j) => {
        if (player[0] === socket.id && !isNaN(player[1])) {
          if (j === 0) {
            let secondPlayerPos = 1;
            if (!isNaN(activeGames[i][secondPlayerPos][1]) && activeGames[i][secondPlayerPos][1] > 0) {
              if (player[1] > activeGames[i][secondPlayerPos][1]) {
                player[2]++;
                player[1] = 0;
                activeGames[i][secondPlayerPos][1] = 0;
                helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
              }
              else {
                activeGames[i][secondPlayerPos][2]++;
                activeGames[i][secondPlayerPos][1] = 0;
                player[1] = 0;
                helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
              }
            }
          }
          if (j === 1) {
            let secondPlayerPos = 0;
            if (!isNaN(activeGames[i][secondPlayerPos][1]) && activeGames[i][secondPlayerPos][1] > 0) {
              if (player[1] > activeGames[i][secondPlayerPos][1]) {
                player[2]++;
                player[1] = 0;
                activeGames[i][secondPlayerPos][1] = 0;
                helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
              }
              else {
                activeGames[i][secondPlayerPos][2]++;
                activeGames[i][secondPlayerPos][1] = 0;
                player[1] = 0;
                helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
              }
            }
          }
        }
      })
    })

    activeGames.forEach((game, index) => {
      console.log(game + '\r\n')
    })

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
      let tilePosition = Math.floor(Math.random() * 9) + 1;
      let socketIds = [games[index].players[0], games[index].players[1]]
      activeGames.push(socketIds);
      io.to(games[index].players[0]).emit('activateboard', {starttime: Date.now(), activetile: tilePosition})
      io.to(games[index].players[1]).emit('activateboard', {starttime: Date.now(), activetile: tilePosition})
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
    if (activeGames.length > 0) {
      for (let i = 0; i < activeGames.length; i++) {
        if (activeGames[i].length > 0) {
          for (let j = 0; j < activeGames.length; j++) {
            if (activeGames[i][j] == socket.id) {
              activeGames[i].splice(j, 1)
            }
          }
        }
      }
    }
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
