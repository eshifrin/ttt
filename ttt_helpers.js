


module.exports.guideBoard = {
  board: [[1,2,3],
          [4,5,6],
          [7,8,9]]
}


module.exports.tBoard = function() {
  this.board = [['-','-','-'],
                ['-','-','-'],
                ['-','-','-']];

  
  this.validMoves = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
  }  

}

this.tBoard.prototype = {
  draw: function() {
    let drawing = ''

    this.board.forEach(row => {
      drawing += '\n'
      row.forEach(space => {
        drawing += ' ' + space;
      })
    })

    return drawing;
  },
  toggle: function(position, letter){
    let row = Math.ceil(position / 3) - 1;
    let col = Math.ceil((position - 1) % 3);
    this.board[row][col] = letter;
    delete this.validMoves[position];
  },
  hasWinner: function(letter) {
    for (var i = 0; i <= 2; i++) {
      if (this.board[i].every(e => e === letter)) {
        return true;
      }
      if (this.board[0][i] === letter && 
          this.board[1][i] === letter && 
          this.board[2][i] === letter) {
        return true;
      }
    }

    if (this.board[0][0] === letter && 
        this.board[1][1] === this.letter && 
        this.board[2][2] === letter) {
      return true;
    }

    if (this.board[2][0] === letter && 
        this.board[1][1] === letter && 
        this.board[0][2] === letter) {
      return true;
    }

  return false;
  },
  hasTie: function() {
    return !Object.keys(this.validMoves).length;
  }
}


