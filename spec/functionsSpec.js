var helper = require ("../config/functions");

describe("arrays", () => {
  it("should have matching value removed", () => {
    let result = helper.handleDisconnectedPlayer(id, [lobby, pendingGames, activeGames]);
    expect(result).toBe(3);
  })
})


let id = 'xkds09djka3';
let lobby= [
  'xkds09djka3',
  'xkds09sdadjka3', 
  'xkds09djka223', 
  'xkds09djka111113', 
  'xkds09djka312', 
  'xkds09djkkjka3', 
  'xkds09djka3sda'
]

let pendingGames= [
    {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09sdadjka3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka111113',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka223',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djksdaa3',
        timeStarted : 94839930
    },
]

let activeGames= [   {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka3',
        playertwo : 'aaxkds09djkasa3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09sdadjka3',
        playertwo : 'aasxkds09djkasa3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka111113',
        playertwo : 'aaxkds09djksasa3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djka223',
        playertwo : '2aaxkds09djkasa3',
        timeStarted : 94839930
    },
        {
        id : '4kdsakdsa0k',
        playerone : 'xkds09djksdaa3',
        playertwo : '4aaxkds09djkasa3',
        timeStarted : 94839930
    },
]