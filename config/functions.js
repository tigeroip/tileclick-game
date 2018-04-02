exports.sendGameId = (gameId, playerOneId, playerTwoId, io) => {
    io.to(playerOneId).emit('gameid', {gameid : gameId})  
    io.to(playerTwoId).emit('gameid', {gameid : gameId}) 
}
exports.sendNewTilePosition = (playerOneId, playerTwoId, io) => {
    let tilePosition = Math.floor(Math.random() * 9) + 1;
    io.to(playerOneId).emit('activateboard', {starttime: Date.now(), activetile: tilePosition})  
    io.to(playerTwoId).emit('activateboard', {starttime: Date.now(), activetile: tilePosition}) 
}

exports.sendScore = (playerId, newScore, io) => {
    io.to(playerId).emit('score', {score: newScore})  
}

exports.sendOpponentScore = (playerId, newScore, io) => {
    io.to(playerId).emit('score', {opponentscore: newScore})  
}
exports.sendPlayerName = (playerId, playerName, io) => {
    io.to(playerId).emit('opponentname', {opponentname: playerName}) 
}