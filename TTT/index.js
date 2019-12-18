class Player {
  constructor(tileMarker, turn) {
    this.marker = tileMarker;
    this.turn = turn;
  }
}

class Board {
  initializeBoard() {
    let board = document.getElementById("board")
    for(let i = 0; i < 9; i++) {
    	let newDiv = document.createElement("div")
      newDiv.setAttribute("id", `${i}`)
      let newDivContent = document.createTextNode(`hello ${i}`)
      newDiv.appendChild(newDivContent)
      // newDiv.addEventListener("click", myfunction)
      board.appendChild(newDiv)
    }

    let auto = ""
    for(let i=0; i < 3; i++) {
    	auto += "auto "
    }
    board.setAttribute(
    "style",
    `display: grid;grid-template-columns: ${auto};`
    )
  }

  constructor(boardSize) {
    // create board in memory
    let winner = null;
    this.initializeBoard(boardSize)
  }

  play(playerToPlay) {
    // set up the listeners
    console.log('play')
  }

  gameOver() {
    return false
  }

  winner() {

  }
}

class Game {
  constructor() {
    this.player1 = new Player("X", "One");
    this.player2 = new Player("O", "Two");
    this.board = new Board;
    this.lastPlayerToMove = null;
  }

  playGame() {
    console.log("playing game!!!")
    // debugger
    // while (!this.board.gameOver()) {
      let playerToPlay = this.determinePlayerToPlay(this.lastPlayerToMove);
      document
        . getElementById("player-to-play")
        .innerHTML = `Player ${playerToPlay.turn} to play!`
      //this.board.play(playerToPlay) // this is where we are right now
    // }


    if (this.board.winner()) {
      return this.board.winner
    } else {
      console.log("it's a tie!")
    }
  }

  determinePlayerToPlay(lastPlayerToMove) {
    if(lastPlayerToMove === null || lastPlayerToMove === player2) {
      return this.player1
    } else {
      return this.player2
    }
  }
}


const game = new Game;
game.playGame();
