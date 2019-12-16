class Player {
  constructor(tileMarker, turn) {
    let marker = tileMarker;
    let turn = turn;
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
    const player1 = new Player("X", "One");
    const player2 = new Player("O", "Two");
    let board = new Board;
    let playerToMove = null;
  }

  playGame() {
    console.log("playing game!!!")

    while (!board.gameOver()) {
      let playerToPlay = determinePlayerToPlay();
      document
        .getElementById('player-to-play')
        .innerHTML = `Player ${playerToPlay.turn}`
      board.play(playerToPlay)
    }
    if (board.winner) {
      return board.winner
    } else {
      console.log("it's a tie!")
    }
  }
}


const game = new Game;
game.playGame();
