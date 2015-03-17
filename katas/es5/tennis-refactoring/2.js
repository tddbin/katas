var TennisGame = function(player1Name, player2Name) {
  this.P1point = 0;
  this.P2point = 0;

  this.P1res = "";
  this.P2res = "";

  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame.prototype.getScore = function() {
  var score = "";

  if (this.P1point === this.P2point && this.P1point < 3) {
    if (this.P1point === 0) {
      score = "Love";
    }
    if (this.P1point === 1) {
      score = "Fifteen";
    }
    if (this.P1point === 2) {
      score = "Thirty";
    }
    score += "-All";
  }
  if (this.P1point === this.P2point && this.P1point > 2) {
    score = "Deuce";
  }

  if (this.P1point > 0 && this.P2point === 0) {
    if (this.P1point === 1) {
      this.P1res = "Fifteen";
    }
    if (this.P1point === 2) {
      this.P1res = "Thirty";
    }
    if (this.P1point === 3) {
      this.P1res = "Forty";
    }

    this.P2res = "Love";
    score = this.P1res + "-" + this.P2res;
  }
  if (this.P2point > 0 && this.P1point === 0) {
    if (this.P2point === 1) {
      this.P2res = "Fifteen";
    }
    if (this.P2point === 2) {
      this.P2res = "Thirty";
    }
    if (this.P2point === 3) {
      this.P2res = "Forty";
    }

    this.P1res = "Love";
    score = this.P1res + "-" + this.P2res;
  }

  if (this.P1point > this.P2point && this.P1point < 4) {
    if (this.P1point === 2) {
      this.P1res = "Thirty";
    }
    if (this.P1point === 3) {
      this.P1res = "Forty";
    }
    if (this.P2point === 1) {
      this.P2res = "Fifteen";
    }
    if (this.P2point === 2) {
      this.P2res = "Thirty";
    }
    score = this.P1res + "-" + this.P2res;
  }
  if (this.P2point > this.P1point && this.P2point < 4) {
    if (this.P2point === 2) {
      this.P2res = "Thirty";
    }
    if (this.P2point === 3) {
      this.P2res = "Forty";
    }
    if (this.P1point === 1) {
      this.P1res = "Fifteen";
    }
    if (this.P1point === 2) {
      this.P1res = "Thirty";
    }
    score = this.P1res + "-" + this.P2res;
  }

  if (this.P1point > this.P2point && this.P2point >= 3) {
    score = "Advantage player1";
  }

  if (this.P2point > this.P1point && this.P1point >= 3) {
    score = "Advantage player2";
  }

  if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
    score = "Win for player1";
  }
  if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
    score = "Win for player2";
  }
  return score;
};

TennisGame.prototype.SetP1Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.P1Score();
  }
};

TennisGame.prototype.SetP2Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.P2Score();
  }
};

TennisGame.prototype.P1Score = function() {
  this.P1point++;
};

TennisGame.prototype.P2Score = function() {
  this.P2point++;
};

TennisGame.prototype.wonPoint = function(player) {
  if (player === "player1") {
    this.P1Score();
  } else {
    this.P2Score();
  }
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
