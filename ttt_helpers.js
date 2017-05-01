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

