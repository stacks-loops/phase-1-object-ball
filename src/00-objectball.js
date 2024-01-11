// contains and returns a nested object

function gameObject() {
    const game = {
        home : {
        teamName : "Brooklyn Nets",
        colors : ["black", "white"],
        players : {
            "Alan Anderson" : {
                number : 0,
                shoe : 16,
                points : 22,
                rebounds : 12,
                assists : 12,
                steals : 3,
                blocks : 1,
                slamDunks : 1,
            },
            "Reggie Evans" : {
                number : 30,
                shoe : 14,
                points : 12,
                rebounds : 12,
                assists : 12,
                steals : 12,
                blocks : 12,
                slamDunks : 7,
            },
            "Brook Lopez" : {
                number : 11,
                shoe : 17,
                points : 17,
                rebounds : 19,
                assists : 10,
                steals : 3,
                blocks : 1,
                slamDunks : 15,
            },
            "Mason Plumlee" : {
                number : 1,
                shoe : 19,
                points : 26,
                rebounds : 12,
                assists : 6,
                steals : 3,
                blocks : 8,
                slamDunks : 5,
            },
            "Jason Terry" : {
                number : 31,
                shoe : 15,
                points : 19,
                rebounds : 2,
                assists : 2,
                steals : 4,
                blocks : 11,
                slamDunks : 1,
            }

        }

    },
        away : {
            teamName : "Charlotte Hornets",
            colors : ["turquoise", "purple"],
         players : {
            "Jeff Adrien" : {
                number : 4,
                shoe : 18,
                points : 10,
                rebounds : 1,
                assists : 1,
                steals : 2,
                blocks : 7,
                slamDunks : 2,
            },
            "Bismak Biyombo" : {
                number : 0,
                shoe : 16,
                points : 12,
                rebounds : 4,
                assists : 7,
                steals : 7,
                blocks : 15,
                slamDunks : 10,
            },
            "DeSagna Diop" : {
                number : 2,
                shoe : 14,
                points : 24,
                rebounds : 12,
                assists : 12,
                steals : 4,
                blocks : 5,
                slamDunks : 5,
            },
            "Ben Gordon" : {
                number : 8,
                shoe : 15,
                points : 33,
                rebounds : 3,
                assists : 2,
                steals : 1,
                blocks : 1,
                slamDunks : 0,
            },
            "Brendan Haywood" : {
                number : 33,
                shoe : 15,
                points : 6,
                rebounds : 12,
                assists : 12,
                steals : 22,
                blocks : 5,
                slamDunks : 12,
            }

        }

    }
    }
return game;
}
// console log game object to ensure it is running
// console.log(gameObject())

function homeTeamName() {
    let object = gameObject()
    return object["home"]["teamName"]
}

// let finalObject = Object.keys(gameObject());

function numPointsScored(playerName) {
    const game = gameObject();

    if (game['home']['players'][playerName]) {
        return game['home']['players'][playerName]['points']
    } 
    else if (game['away']['players'][playerName]) {
        return game['away']['players'][playerName]['points']
}
}

//console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    const game = gameObject();

    if (game['home']['players'][playerName]) {
        return game['home']['players'][playerName]['shoe']
    } 
    else if (game['away']['players'][playerName]) {
        return game['away']['players'][playerName]['shoe']
}
}
//console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
    const game = gameObject();
    return game[teamName]['colors']
}

//console.log(teamColors('home'));

function teamNames() {
const teams = []
const game = gameObject();
teams.push(game['home']['teamName'])
teams.push(game['away']['teamName'])
return teams
}

//console.log(teamNames())

// if the teamname in game - team - team name
function playerNumbers(teamName) {
    const game = gameObject()

    if (game['home']['teamName'] == teamName) {
        const players = Object.values(game['home']['players'])
        return players.map(e => e.number)
    }

    else if (game['away']['teamName'] == teamName) {
        const players = Object.values(game.away.teamName)
        return map.players(e => e.number)
        
}
}

// console.log(playerNumbers('Brooklyn Nets'))

function playerStats(playerName) {

    const game = gameObject();
    if (game['home']['players'][playerName]){
        return (game['home']['players'][playerName]) 
    
}
    else if (game['away']['players'][playerName]) {
        return game['away']['players'][playerName];
  }
}
console.log((playerStats("Alan Anderson")))