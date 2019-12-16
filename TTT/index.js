class Player {
  constructor(tileMarker) {
    let marker = tileMarker;
  }
}

class Board {
  constructor() {
    let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  }
}

class Game {
  constructor() {
    const player1 = new Player("X");
    const player2 = new Player("O");
    let board = new Board;
    let playerToMove = null;
  }

  playGame() {
    console.log("playing game!!!")

    while (!Board.gameOver()) {
      let playerToPlay = determinePlayerToPlay();
      document.getElementById('player-to-play').innerHTML = ""
    }
  }
}


const game = new Game;
game.playGame();
