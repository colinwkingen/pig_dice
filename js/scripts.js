var dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
var currentPlayer = 1;
var playerOne = new Current();
var computerPlayer = new Current();
function Current() {
  this.currentRoll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
};
var diechecker = function() {
  if (currentPlayer === 1) {
    return dice[playerOne.currentRoll - 1];
  } else {
    return dice[computerPlayer.currentRoll - 1];
  }
}
var diceRoll = function(player) {
  roll = Math.floor((Math.random() * 6) + 1);
  if (roll === 1 && player === 1) {
    playerOne.currentRoll = 0;
    playerOne.currentScore = 0;
    return 0;
  } else if (roll === 1) {
    computerPlayer.currentRoll = 0;
    computerPlayer.currentScore = 0;
    return 0;
  } else if ( playerOne.totalScore + roll > 100) {
    alert("playerOne Wins!")
  } else if ( computerPlayer.totalScore + roll > 100) {
    alert("ComputerPlayer Wins!")
  }
  return roll;
};
Current.prototype.runTurn = function() {
  currentPlayer = 1;
  var roll = diceRoll(currentPlayer);
  if (roll === 0) {
    computerPlayer.compTurn();
  }
  this.currentRoll = roll;
  this.currentScore += this.currentRoll;
};

Current.prototype.compTurn = function() {
  currentPlayer = 2;
  var roll = diceRoll(currentPlayer);
  if (roll === 0) {
    playerOne.runTurn();
  } 
  while (computerPlayer.currentScore < 15) {
    roll = diceRoll(2);
    this.currentRoll = roll;
    this.currentScore += this.currentRoll;
  }
  // this.currentRoll = roll;
  // this.currentScore += this.currentRoll;
};
var totalScore = function(player) {
  if ( currentPlayer === 1 ) {
    playerOne.totalScore += playerOne.currentScore;
    playerOne.currentScore = 0;
  } else {
    computerPlayer.totalScore += computerPlayer.currentScore;
    computerPlayer.currentScore = 0;
  };
};

$(document).ready(function() {
  $("#roll").click(function() {
    playerOne.runTurn();
    $("#score-player1").html("<li> Score This Turn: " + playerOne.currentScore + "</li><li> Score This Roll: " + playerOne.currentRoll + "</li><li> Grand Total Score: " + playerOne.totalScore + "</li>");
    $("#score-player2").html("<li> Score This Turn: " + computerPlayer.currentScore + "</li><li> Score This Roll: " + computerPlayer.currentRoll + "</li><li> Grand Total Score: " + computerPlayer.totalScore + "</li>");
    var diceface = diechecker();
    $("#current-die").html(diceface);
  });
  $("#hold").click(function() {
    totalScore(currentPlayer);
    $("#score-player1").html("<li> Score This Turn: " + playerOne.currentScore + "</li><li> Score This Roll: " + playerOne.currentRoll + "</li><li> Grand Total Score: " + playerOne.totalScore + "</li>");
    computerPlayer.compTurn();
    $("#score-player2").html("<li> Score This Turn: " + computerPlayer.currentScore + "</li><li> Score This Roll: " + computerPlayer.currentRoll + "</li><li> Grand Total Score: " + computerPlayer.totalScore + "</li>");
    totalScore(currentPlayer);
    currentPlayer = 1;
  });
});
