const helper = require("./config/functions");
const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

    const MAXTILES = 10; // max amount of activated tiles per game
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
    
    // initial score, mutates the array
    activeGames.forEach((game, i) => {
     game.forEach((player, j) => {
       if (player === socket.id) {
         activeGames[i][j] = [socket.id, playerDelay, 0]
       }
     })
    })

    // only works after the first set of playerDelay has been received
    activeGames.forEach((game, i) => {
      game.forEach((player, j) => {
        if (player[0] === socket.id && player[1] === 0) {
          activeGames[i][j][1] = playerDelay;
        }
      })
    })

    // Verifies that both players score has been received
    activeGames.forEach((game, i) => {
      game.forEach((player, j) => {
        if (player[0] === socket.id && player[1] > 0) {
          if (j === 0) {
            let secondPlayerPos = 1;
            if (activeGames[i][secondPlayerPos][1] && activeGames[i][secondPlayerPos][1] > 0) {
              if (player[1] > activeGames[i][secondPlayerPos][1]) {
                activeGames[i][secondPlayerPos][2]++;
                activeGames[i][j][1] = 0;
                activeGames[i][secondPlayerPos][1] = 0;
                //dont activate more tiles than specified in the MAXTILES
                if ((activeGames[i][secondPlayerPos][2] + activeGames[i][j][2]) <= MAXTILES) {
                  helper.sendScore(activeGames[i][secondPlayerPos][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendOpponentScore(activeGames[i][j][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
                }
              }
              else {
                activeGames[i][j][2]++;
                activeGames[i][secondPlayerPos][1] = 0;
                activeGames[i][j][1] = 0;
                if ((activeGames[i][secondPlayerPos][2] + activeGames[i][j][2]) <= MAXTILES) {
                  helper.sendScore(activeGames[i][j][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendOpponentScore(activeGames[i][secondPlayerPos][0], activeGames[i][j][2], io);
                  helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
                }
              }
            }
          }
          if (j === 1) {
            let secondPlayerPos = 0;
            if (activeGames[i][secondPlayerPos][1] && activeGames[i][secondPlayerPos][1] > 0) {
              if (player[1] > activeGames[i][secondPlayerPos][1]) {
                activeGames[i][secondPlayerPos][2]++;
                activeGames[i][j][1] = 0;
                activeGames[i][secondPlayerPos][1] = 0;
                if ((activeGames[i][secondPlayerPos][2] + activeGames[i][j][2]) <= MAXTILES) {
                  helper.sendScore(activeGames[i][secondPlayerPos][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendOpponentScore(activeGames[i][j][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
                }
              }
              else {
                activeGames[i][j][2]++;
                activeGames[i][secondPlayerPos][1] = 0;
                activeGames[i][j][1] = 0;
                if ((activeGames[i][secondPlayerPos][2] + activeGames[i][j][2]) <= MAXTILES) {
                  helper.sendScore(activeGames[i][j][0], activeGames[i][secondPlayerPos][2], io);
                  helper.sendOpponentScore(activeGames[i][secondPlayerPos][0], activeGames[i][j][2], io);
                  helper.sendNewTilePosition(player[0], activeGames[i][secondPlayerPos][0], io)
                }
              }
            }
          }
        }
      })
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
      let socketIds = [games[index].players[0], games[index].players[1]]
      activeGames.push(socketIds);
      helper.sendNewTilePosition(games[index].players[0], games[index].players[1], io)
    }
    })

    socket.on('postgame', (data) => {
      activeGames.forEach((game, i) => {
        game.forEach((player, index) => {
          if (player[0] === socket.id) {
            if (index === 1) {
              // if player's score is greater than opponent's score
              if (player[2] > activeGames[i][0][2]) {
                socket.emit('postgame', {winner:1, score:player[2]})
              }
              // if player's score is lower than opponent's score
              if (player[2] < activeGames[i][0][2]) {
                socket.emit('postgame', {winner:0, score:player[2]})
              }
              // if game is a tie
              if (player[2] === activeGames[i][0][2]) {
                socket.emit('postgame', {winner:2, score:player[2]})
              }
            }
            if (index === 0) {
              // if player's score is greater than opponent's score
              if (player[2] > activeGames[i][1][2]) {
                socket.emit('postgame', {winner:1, score:player[2]})
              }
              // if player's score is lower than opponent's score
              if (player[2] < activeGames[i][1][2]) {
                socket.emit('postgame', {winner:0, score:player[2]})
              }
              // if game is a tie
              if (player[2] === activeGames[i][1][2]) {
                socket.emit('postgame', {winner:2, score:player[2]})
              }
            }
          }
        })
      })
    })

socket.on('gamefinished', (data) => {
 if (data === true) {
  activeGames.forEach((game, i) => {
   game.forEach((player, index) => {
    if (player[0] === socket.id) {
     if (index === 1) {
      if ((player[2] + activeGames[i][0][2]) === MAXTILES) {
        socket.emit('gamefinished', {gotopostgame: true})
      }  
     }
     if (index === 0) {
      if ((player[2] + activeGames[i][1][2]) === MAXTILES) {
        socket.emit('gamefinished', {gotopostgame: true})
      }  
     }
    }
   })
  })
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
