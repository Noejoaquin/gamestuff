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
    let board = new Board;
    const player1 = new Player("X");
    const player2 = new Player("O");
  }

  playGame() {
    console.log("playing game!!!")
  }
}


const game = new Game;
game.playGame();
