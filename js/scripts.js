var dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
var currentPlayer = 1;
var playerOne = new Current();
var playerTwo = new Current();

function Current() {
  this.currentScore = 0;
  this.currentRoll = 0;
  this.totalScore = 0;
};

Current.prototype.turn = function() {
  debugger;
  var roll =  Math.floor((Math.random() * 6) + 1 );
  this.currentRoll = roll;
  if (this.currentRoll === 1) {
     this.currentScore = 0;
     return 0;
  } else {
    this.currentScore += this.currentRoll;
    return this.currentRoll;
  }
} ;

var playerSwitch = function() {
  this.totalScore += this.currentScore;
  if (currentPlayer === 1 ) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  return currentPlayer;
}


$(document).ready(function() {
  $("#hold").click(function() {
    currentPlayer = playerSwitch();
  });
  $("#roll").click(function() {
    if (currentPlayer === 1) {
      playerOne.turn()
      $("#score-player1").append(" This Turn: " + playerOne.currentScore + " This Roll: "
                                  + playerOne.currentRoll + " Total Score: " + playerOne.totalScore );
    } else {
      playerTwo.turn()
      $("#score-player2").append(" This Turn: " + playerTwo.currentScore + " This Roll: "
                                  + playerTwo.currentRoll + " Total Score: " + playerTwo.totalScore);
    }
  });

});
