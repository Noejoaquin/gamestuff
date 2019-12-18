class Player {
  constructor(tileMarker, turn) {
    this.marker = tileMarker;
    this.turn = turn;
  }
}

class Board {
  initializeBoardOnDOM(boardSize) {
    let board = document.getElementById("board")
    let row = 0;
    let col = 0;
    for(let i = 0; i < boardSize ** 2; i++) {
      if (i % boardSize === 0 && i !== 0) {
        row ++
        col = 0
      }
    	let newDiv = document.createElement("div")
      newDiv.setAttribute("id", `tile:${row},${col}`)
      // newDiv.innerText = `${i}`
      newDiv.addEventListener("click", this.playerMove.bind(this))
      newDiv.setAttribute("style",
       "height: 100px; border: 1px solid blue; text-align: center;"
      )
      board.appendChild(newDiv)
      col ++
    }

    let auto = ""
    for(let i=0; i < boardSize; i++) {
    	auto += "auto "
    }
    board.setAttribute(
    "style",
    `display: grid;grid-template-columns: ${auto};`
    )
  }

  constructor(boardSize) {
    let winner = null;
    this.lastMarkerPlayed = null
    this.initializeBoardOnDOM(boardSize);
    this.board = new Array(3).fill(0).map(row => new Array(3).fill(null))
  }

  playerMove(e){
    // debugger
    let marker = this.determineMarker();
    // debugger
    if (e.target.innerText === "") {
      debugger
      e.target.innerText = marker;
      this.lastMarkerPlayed = marker;
      e.target.id.match(/(\d+)/);
      // grab the coordinates from the id
      this.checkWinner()
    } else {
      alert("That space is taken!")
    }
  }

  play(playerToPlay) {

    console.log('playing')
  }

  winner() {
    return "winner"
  }

  checkWinner() {
    return "check winner"
  }

  determineMarker() {
    if(this.lastMarkerPlayed === null || this.lastMarkerPlayed === "O") {
      return "X"
    } else {
      return "O"
    }
  }

}

class Game {
  constructor(boardSize) {
    this.player1 = new Player("X", "One");
    this.player2 = new Player("O", "Two");
    this.board = new Board(boardSize);
    this.lastPlayerToMove = null;
  }

  playGame() {
    console.log("playing game!!!")
    window.setInterval(() => {
      if (this.board.winner()) {
        return this.board.winner
      } else if (this.board.tied) {
        console.log("it's a tie!")
      }
    }, 3000)
  }
}


const game = new Game(3);
game.playGame();
