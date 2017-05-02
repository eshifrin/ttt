var expect = require('chai').expect;
var ttt = require('./ttt_helpers')

describe('it should do all of the things', function() {

  it('should accurately toggle boards', function() {
    var board = new ttt.tBoard();
    board.toggle(1, 'X')
    expect(board.board[0][0]).to.equal('X');
  })

  it('should accurately draw boards', function() {
    var board = new ttt.tBoard();
    board.toggle(1, 'X');
    board.toggle(9, 'O');
    
    let expectedBoard = 
      `\n X - -` + 
      `\n - - -` + 
      `\n - - O`

    expect(board.draw()).to.equal(expectedBoard);
  });

  it('should detect winners', function() {
    var board = new ttt.tBoard();
    board.toggle(1, 'X');
    board.toggle(2, 'X');
    board.toggle(3, 'X');
    
    expect(board.hasWinner('X')).to.equal(true);
  });

  it('should detect ties', function() {
    var board = new ttt.tBoard();
    board.toggle(1, 'X');
    board.toggle(2, 'X');
    board.toggle(3, 'O');
    board.toggle(4, 'O');
    board.toggle(5, 'O');
    board.toggle(6, 'X');
    board.toggle(7, 'X');
    board.toggle(8, 'O');
    board.toggle(9, 'X');
    
    expect(board.hasWinner('X')).to.equal(false);
    expect(board.hasWinner('O')).to.equal(false);
    expect(board.hasTie()).to.equal(true);    
  })
})

