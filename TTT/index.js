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
      newDiv.setAttribute("id", `tile:${row},${col}`) // coordinates on the dom
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
    let marker = this.determineMarker();
    if (e.target.innerText === "") {
      e.target.innerText = marker;
      this.lastMarkerPlayed = marker;
      const [row, col] = this.determineCoordinates(e)
      this.updateBoard(row, col, marker)
      const winner = this.checkWinner()
      if (winner) {
        this.gameOver(winner)
      } else if (this.tie()){
        alert("tie!")
      }
    } else {
      alert("That space is taken!")
    }
  }

  tie() {
    let nullCount = 0;
    this.board.forEach(row => {
      row.forEach(cell => {
        if (!cell) {
          nullCount ++;
        }
      })
    })
    if (nullCount === 0) { return true }
  }

  gameOver(winner) {
    alert(`winner is: ${winner}`)
  }

  updateBoard(row, col, marker){
    this.board[row][col] = marker
  }

  determineCoordinates(e) { // e.target
    return e.target.id.split(":")[1].split(",").map(el => parseInt(el))
  }

  play(playerToPlay) {
    console.log('playing')
  }

  winner() {
    return "winner"
  }

  checkWinner() {
    //checking rows
    for (let i = 0; i < this.board.length; i++) {
      let count = 0;
      for (let j = 0; j < this.board.length; j ++) {
        const cell = this.board[i][j]
        if(cell === this.lastMarkerPlayed) {
          count ++
          if (count === this.board.length) { return this.lastMarkerPlayed }
        } else {
          continue;
        }
      }
    }

    //check columns
    for (let i = 0; i < this.board.length; i ++) {
      let count = 0;
      for (let j = 0; j < this.board.length; j ++) {
        const cell = this.board[j][i];
        if (cell === this.lastMarkerPlayed) {
          count ++
          if (count === this.board.length) { return this.lastMarkerPlayed }
        } else {
          continue;
        }
      }
    }

    //check diagonal left to right
    let diagonalCount = 0;
    for (let i = 0; i < this.board.length; i ++) {
      if (this.board[i][i] === this.lastMarkerPlayed) {
        diagonalCount ++;
        if (diagonalCount === this.board.length) { return this.lastMarkerPlayed }
      } else {
        continue;
      }
    }

    // check diagonal right to left
    let diagonal2Count = 0
    for (let i = 0, j = 2; i < this.board.length; i ++, j --) {
      if (this.board[i][j] === this.lastMarkerPlayed) {
        diagonal2Count ++;
        if (diagonal2Count === this.board.length) { return this.lastMarkerPlayed }
      } else {
        continue;
      }
    }
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
}


const game = new Game(3);
