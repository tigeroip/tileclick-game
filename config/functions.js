
exports.findSocketObject =
    (gameData, socketidToMatch, socket, socketName) => { 
        new Promise((resolve, reject) => {
            var foundMatchingSocket = [socketidToMatch];
            for (var i = 0; i < gameData.length; i++) {
                if ( gameData[i].socketid == socketidToMatch ) 
                    foundMatchingSocket.push(gameData[i])
            }
        resolve({foundMatchingSocket}, socket, socketName)
        }).then(foundMatchingSocket => {console.log(foundMatchingSocket); socket.emit(socketName, foundMatchingSocket)}
        ).catch((reason) => { console.log('Handled rejected promise ('+reason+') here.')})
    };
exports.handleRedisError =
    (err, resp, customSuccessMessage) => {
        if (err)
            console.log('database error: '+err +'\n')
        else 
            console.log(customSuccessMessage + '\n' + 'database response: ' + resp)
    }
exports.getRedisField=
    (client, hash, field) => {
        client.hget([hash, field], (err, resp) => {
            if (err)
                console.log('failed to get field:'+field+' '+ err +'\n')
            else
                console.log(resp)
        })
    }
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

exports.sendNewTilePosition = (playerOneId, playerTwoId, io) => {
    let tilePosition = Math.floor(Math.random() * 9) + 1;
    io.to(playerOneId).emit('activateboard', {starttime: Date.now(), activetile: tilePosition})  
    io.to(playerTwoId).emit('activateboard', {starttime: Date.now(), activetile: tilePosition}) 
}