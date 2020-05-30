module.exports = {
    manyPlayersOneMove: manyPlayersOneMove
}

var helpers = require( './helpers' );

function manyPlayersOneMove( game ){
    
    function whatever( moves ){
    newgame = helpers.makeMovePartThree( game, moves, 1, 1, 0 );
	return newgame;
    }

    return whatever;
}
