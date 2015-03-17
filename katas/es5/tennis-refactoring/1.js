// derived from https://github.com/emilybache/Tennis-Refactoring-Kata

var TennisGame = function(player1Name, player2Name) {
  this.m_score1 = 0;
  this.m_score2 = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame.prototype.wonPoint = function(playerName) {
  if (playerName === "player1") {
    this.m_score1 += 1;
  } else {
    this.m_score2 += 1;
  }
};

TennisGame.prototype.getScore = function() {
  var score = "";
  var tempScore = 0;
  if (this.m_score1 === this.m_score2) {
    switch (this.m_score1) {
      case 0:
        score = "Love-All";
        break;
      case 1:
        score = "Fifteen-All";
        break;
      case 2:
        score = "Thirty-All";
        break;
      default:
        score = "Deuce";
        break;
    }
  } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
    var minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) {
      score = "Advantage player1";
    } else if (minusResult === -1) {
      score = "Advantage player2";
    } else if (minusResult >= 2) {
      score = "Win for player1";
    } else {
      score = "Win for player2";
    }
  } else {
    for (var i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = this.m_score1;
      } else {
        score += "-";
        tempScore = this.m_score2;
      }
      switch (tempScore) {
        case 0:
          score += "Love";
          break;
        case 1:
          score += "Fifteen";
          break;
        case 2:
          score += "Thirty";
          break;
        case 3:
          score += "Forty";
          break;
      }
    }
  }
  return score;
};

//
// The tests.
//

var allScores = [
  [0, 0, "Love-All"],
  [1, 1, "Fifteen-All"],
  [2, 2, "Thirty-All"],
  [3, 3, "Deuce"],
  [4, 4, "Deuce"],

  [1, 0, "Fifteen-Love"],
  [0, 1, "Love-Fifteen"],
  [2, 0, "Thirty-Love"],
  [0, 2, "Love-Thirty"],
  [3, 0, "Forty-Love"],
  [0, 3, "Love-Forty"],
  [4, 0, "Win for player1"],
  [0, 4, "Win for player2"],

  [2, 1, "Thirty-Fifteen"],
  [1, 2, "Fifteen-Thirty"],
  [3, 1, "Forty-Fifteen"],
  [1, 3, "Fifteen-Forty"],
  [4, 1, "Win for player1"],
  [1, 4, "Win for player2"],

  [3, 2, "Forty-Thirty"],
  [2, 3, "Thirty-Forty"],
  [4, 2, "Win for player1"],
  [2, 4, "Win for player2"],

  [4, 3, "Advantage player1"],
  [3, 4, "Advantage player2"],
  [5, 4, "Advantage player1"],
  [4, 5, "Advantage player2"],
  [15, 14, "Advantage player1"],
  [14, 15, "Advantage player2"],

  [6, 4, "Win for player1"],
  [4, 6, "Win for player2"],
  [16, 14, "Win for player1"],
  [14, 16, "Win for player2"]
];

var checkScore = function(player1Score, player2Score, expectedScore) {
  var highestScore = Math.max(player1Score, player2Score);
  try {
    var game = new TennisGame("player1", "player2");
    for (var i = 0; i < highestScore; i++) {
      if (i < player1Score) {
        game.wonPoint("player1");
      }
      if (i < player2Score) {
        game.wonPoint("player2");
      }
    }
    if (game.getScore() === expectedScore) {
      return true;
    }
  } catch (ex) {}
  return false;
};

describe('tennis game', function() {

  allScores.forEach(function(score) {
    it(score[2], function() {
      assert.ok(checkScore(score[0], score[1], score[2]));
    });
  });

});
