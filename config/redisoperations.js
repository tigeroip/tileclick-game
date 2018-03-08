const _MAXPLAYERS_ = 2;
var redis = require("redis");
var client;

exports.init = function init() {
  if (typeof client === "undefined") {
    client = redis.createClient();
    client.on("ready", () => {console.log('connection is ready')});
    client.on("error", () => {console.log(err)});
    client.on("end", () => {console.log('connection has been ended')});
  }
};

exports.redisError = (err, msg) => console.log(msg + '\n' + err)

exports.saveDataToRedis = function(data) {
  // save data to redis through client
};

exports.handleRedisGamestate = function(socketid, socket) {
    let gamestate = ''; //new or join game
    let initialgamename = ''; //gamename that user initially specified
    
    //find object by socketid
    client.hgetall(socketid, (err, resp) => {
        if (err) redisError('failed to get all fields: '+socketid, err);
        gamestate = resp.gamestate
        initialgamename = resp.gamename
        //find object by game name specified by the player
        client.hgetall(initialgamename, (err, resp) => {
            if (err) redisError('failed to get all fields: '+initialgamename, err);
            let players = (resp || {}).players;

            //if player chose to join existing game
            if (gamestate == 'joingame') {
                //if the game exists and there are players in the game exists 
                if (typeof players !== "undefined") {
                    //if the game is not full
                    if (players < _MAXPLAYERS_)
                        client.hset([initialgamename, 'players', players+1], (err, resp) => {
                            if (err) redisError(`failed to add another player to the game ${initialgamename}`);
                            socket.emit('formValid', 'true')
                            console.log(`joined a game with gamename: ${initialgamename}`);
                        });
                        //if the game is full 
                    if (players == _MAXPLAYERS_)
                        socket.emit('formError', 'Game is full')
                }
                else {
                    socket.emit('formError', 'That game does not exist')
                }
            }
            //if player chose to create a new game
            if (gamestate == 'newgame') {
                //if the game does not already exist
                if (typeof players === "undefined") {
                     client.hset([initialgamename, 'players', 1], (err, resp) => {
                            if (err) redisError(`failed to create a new game with gamename ${initialgamename}`);
                            socket.emit('formValid', 'true')
                            console.log(`created new game with gamename: ${initialgamename}`);
                        });
                }
                //if the game already exists
                else
                    socket.emit('formError', 'That game already exist')
            }
        });

    })

};

exports.getAllRedisFields = (hash) => {
    var dbData;
    client.hgetall(hash, (err, resp) => {
        if (err) redisError('failed to get all fields: '+hash, err);
        (resp) ? dbData = resp : dbData = 'dbData returned falsy type'
        return dbData
    })
}
exports.getRedisField = (hash, field) => {
  client.hget([hash, field], (err, resp) => {
    if (err) redisError('failed to get field: '+field, err);
    return resp;
  });
};
exports.setRedisField = (hash, field, value) => {
  client.hset([hash, field, value], (err, resp) => {
    if (err) redisError('failed to set field: '+field + 'with value of: '+value, err);
    return resp;
  });
};
