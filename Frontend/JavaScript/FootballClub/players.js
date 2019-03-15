function Player(name,isNewPlayer) {
    this.name = name;
    this.goals = 0;
    this.isNewPlayer = isNewPlayer;
    this.totalInduvidualGoals = 0;
    this.scored = function () {
        this.goals++;
    }
    this.totalScores = function () {
        this.totalInduvidualGoals++;
    }
    this.resetGoals = function () {
        this.goals = 0;
    }
}