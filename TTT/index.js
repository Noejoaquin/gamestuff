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
    let winner = null;
  }

  play(playerToPlay) {
    // set up the listeners
    console.log('play')
  }
}

class Game {
  constructor() {
    const player1 = new Player("X", "One");
    const player2 = new Player("O", "Two");
    let board = new Board;
    let lastPlayerToMove = null;
  }

  playGame() {
    console.log("playing game!!!")

    while (!board.gameOver()) {
      let playerToPlay = determinePlayerToPlay(lastPlayerToMove);
      document
        .getElementById('player-to-play')
        .innerHTML = `Player ${playerToPlay.turn}`
      board.play(playerToPlay) // this is where we are right now
    }
    if (board.winner) {
      return board.winner
    } else {
      console.log("it's a tie!")
    }
  }

  determinePlayerToPlay(lastPlayerToMove) {
    if(lastPlayerToMove === null || lastPlayerToMove === player2) {
      return player1
    } else {
      return playerToMove
    }
  }
}


const game = new Game;
game.playGame();
