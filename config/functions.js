
exports.handleDisconnectedPlayer = (id, rooms) => {
        let arraysPurged = 0;
        rooms.forEach((room) => {
        let firstLength = room.length;
        room.splice(room.findIndex((el)=> {return el === id}), 1);
        if (room.length < firstLength)
            arraysPurged++;
   })
   return arraysPurged;
}

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