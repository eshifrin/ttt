var prompt = require('prompt');

var ttt = require('./ttt_helpers.js')


prompt.start();
prompt.get('Click anything when ready', function(err, result) {

    let newBoard = ttt.emptyBoard();

    console.log('\n')
    console.log('ok great.  There will be two players: Player 1 and Player 2.')
    console.log('Player 1 will be X.  Player 2 will be O.')
    console.log('Please pick spots according to this chart')
    console.log(ttt.drawBoard(ttt.guideBoard));

    let player = 'Player 1';

    let letters = {
      'Player 1': 'X',
      'Player 2': 'O'
    }

    let nextPlayer = () => {
      if (player === 'Player 1') {
        player === 'Player 2';
      } else {
        player === 'Player 1';
      }
    }

    while (true) {
      //prompt player 1 for a spot
        //map it to a spot and toggle that
          //check to see if the game is over, if it is say which player won of it's a tie

          //otherwise switch the player and the turn

      //

      let promptTxt = player + ' turn';


      ttt.toggleBoard(newBoard, response, letters[player]);
      if (ttt.checkForWinner(newBoard, letter)) {
        console.log(player, 'won')
        return;
      }

    }
    




})

