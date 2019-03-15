function FootballClub(name) {
    this.name = name;
    this.players = [];
    this.totalGoals = 0;

    this.generatePlayers = function () {
        for (var i = 0; i < 22 ; i++) {
            var name = names[getRandomNumber(0,9)];
            this.players[i] = new Player(name,false);
        }
    }
    this.generatePlayers();

    this.playGame = function () {
        for (var i = 0; i < 30 ; i++) {
            //every 15 min they have a 30% chance to score
            for(var k = 0;k<90;k+=15) {
                var scored = calculatePercent(30);
                if (scored) {
                    var whoScored = getRandomNumber(0, 21);
                    this.players[whoScored].scored();
                    this.totalGoals++;
                    this.players[whoScored].totalScores();
                }
            }
            //check if 8 more days have passed
            if(i===7||i===15||i===23){
                var firstMinScoringPlayer = this.players[0];
                var playerIndex = 0;
                for (var j = 1; j < this.players.length; j++) {
                    if(this.players[j].goals<firstMinScoringPlayer.goals){
                        firstMinScoringPlayer = this.players[j];
                        playerIndex = j;
                    }
                }
                //put new player
                var newPlayer = new Player(names[getRandomNumber(0,9)],true);
                this.players[playerIndex] = newPlayer;
                //reset lastweeks goals to 0
                for (var m = 0; m < this.players.length ; m++) {
                    this.players[m].resetGoals();
                }
            }
        }
    }
    this.playGame();
}