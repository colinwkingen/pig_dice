// var dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
// var currentPlayer = 1;
// var playerOne = new Current();
// var playerTwo = new Current();
//
// function Current() {
//   this.currentScore = 0;
//   this.currentRoll = 0;
//   this.totalScore = 0;
// };
// Current.prototype.counterReset = function() {
//   this.currentScore = 0;
// }
// Current.prototype.turn = function() {
//   var roll =  Math.floor((Math.random() * 6) + 1 );
//   if (roll + this.totalScore >= 100) {
//     alert("Player " + currentPlayer + " wins!!");
//     this.totalScore = 0;
//     this.currentScore = 0;
//     this.currentRoll = 0;
//   }
//   this.currentRoll = roll;
//   if (this.currentRoll === 1) {
//      this.currentScore = 0;
//      playerUpdate = playerSwitch(this.currentScore, this.totalScore)
//      currentPlayer = playerUpdate[0];
//   } else {
//     this.currentScore += this.currentRoll;
//     return this.currentRoll;
//   }
// };
// Current.prototype.computerTurn = function() {
  // var roll =  Math.floor((Math.random() * 6) + 1 );
  //
  // if (roll + this.totalScore >= 100) {
  //   alert("Player " + currentPlayer + " wins!!");
  //   playerOne.totalScore = 0;
  //   playerTwo.totalScore = 0;
  //   playerOne.currentScore = 0;
  //   playerTwo.currentRoll = 0;
  // }
  // this.currentRoll = roll;
  // if (this.currentRoll === 1) {
  //    this.currentScore = 0;
  //    playerUpdate = playerSwitch(this.currentScore, this.totalScore)
  //    currentPlayer = playerUpdate[0];
  //
  //   //  Super Janky AI First Draft
  // } else if (this.currentScore < 20 ) {
  //   this.currentRoll = diceRolls();
  //   this.currentScore += this.currentRoll;
  //   this.currentRoll = diceRolls();
  //   this.currentScore += this.currentRoll;
  // } else if (this.currentScore < 12 ) {
  //   this.currentRoll = diceRolls();
  //   this.currentScore += this.currentRoll;
  // }
  //    currentPlayer = 1;
  //    return this.currentRole;
};
var diceRolls = function() {
  return Math.floor((Math.random() * 6) + 1);
}
var diechecker = function() {
  if (currentPlayer === 1) {
    return dice[playerOne.currentRoll - 1];
  } else {
    return dice[playerTwo.currentRoll - 1];
  }
}
var playerSwitch = function(playerCurrent, playerTotal) {
  playerTotal += playerCurrent;
  if (currentPlayer === 1 ) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  return [currentPlayer,playerTotal];
}

$(document).ready(function() {
  $("#roll").click(function() {
    if (currentPlayer === 1) {
      playerOne.turn();
      $("#score-player1").html("<li> Score This Turn: " + playerOne.currentScore + "</li><li> Score This Roll: " + playerOne.currentRoll + "</li><li> Grand Total Score: " + playerOne.totalScore + "</li>" );
    } else {
      playerTwo.computerTurn();
      $("#score-player2").html("<li> Score This Turn: " + playerTwo.currentScore + "</li><li> Score This Roll: " + playerTwo.currentRoll + "</li><li> Grand Total Score: " + playerTwo.totalScore + "</li>");

    }
    var diceface = diechecker();
    $("#current-die").html(diceface);

  });
  $("#hold").click(function() {
    if (currentPlayer === 1) {
      var switchReturn1 = playerSwitch(playerOne.currentScore,playerOne.totalScore);
      playerOne.totalScore = switchReturn1[1];
      $("#one-score").text("Player One Score : " + playerOne.totalScore);
      playerOne.counterReset();
      playerTwo.computerTurn();
    } else {
      playerTwo.computerTurn();
      currentPlayer = 1;
    };
  });
});
