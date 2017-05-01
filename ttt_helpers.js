module.exports.newboard = 
[['-','-','-'],
['-','-','-'],
['-','-','-']];


module.exports.guideBoard = 
[[1,2,3],
[4,5,6],
[7,8,9]];


module.exports.emptyBoard = function() {
  return this.newboard.slice();
}

module.exports.drawBoard = (board) => {
  let drawing = ''

  board.forEach(row => {
    drawing += '\n'
    row.forEach(space => {
      drawing += ' ' + space;
    })
  })

  return drawing;
}


module.exports.toggleBoard = (board, position, letter) => {
  let row = Math.ceil(position / 3) - 1;
  let col = Math.ceil((position - 1) % 3);
  board[row][col] = letter;
}



module.exports.checkForWinner = (board, letter) => {
  for (var i = 0; i <= 2; i++) {
    if (board[i].every(e => e === letter)) {
      return true;
    }
    if (board[0][i] === letter && board[1][i] === letter && board[2][i] === letter) {
      return true;
    }
  }

  if (board[0][0] === letter && board[1][1] === letter && board[2][2] === letter) {
    return true;
  }

  if (board[2][0] === letter && board[1][1] === letter && board[0][2] === letter) {
    return true;
  }

  return false;
}

