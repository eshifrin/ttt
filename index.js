var prompt = require('prompt');
var ttt = require('./ttt_helpers.js')
let board = new ttt.tBoard();
let player = 'Player 1';


let nextPrompt = (player) => {
  let property = {
    name: 'spot',
    message: `${player} choose a spot`,
    conform: function(input) {
      return board.validMoves[input];
    },
    warning: 'must be a remaining number'
  }
  
  prompt.get(property, function(err, result) {
    console.log(err)
    console.log(result)

    board.toggle(result.spot, letters[player]);
    console.log('New Board: \n', board.draw());

    if (board.hasTie()) {
      console.log('Tie game!')
      return;
    }
    if (board.hasWinner(letters[player])) {
      console.log(player, 'won')
      return;
    } else {
      player = playerToggle();
      nextPrompt(player)
    }
  })
}

let playerToggle = () => {
  if (player === 'Player 1') {
    player = 'Player 2';
  } else {
    player = 'Player 1';
  }
  return player
}


let letters = {
  'Player 1': 'X',
  'Player 2': 'O'
}

prompt.start();
prompt.get('Click anything when ready', function(err, result) {
    console.log('\n')
    console.log('ok great.  There will be two players: Player 1 and Player 2.')
    console.log('Player 1 will be X.  Player 2 will be O.')
    console.log('Please pick spots according to this chart')
    console.log(board.draw.bind(ttt.guideBoard)());
    nextPrompt(player);
})

