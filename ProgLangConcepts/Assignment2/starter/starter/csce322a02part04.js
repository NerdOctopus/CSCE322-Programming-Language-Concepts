module.exports = {
    manyPlayersManyMoves: manyPlayersManyMoves
}

var helpers = require( './helpers' );

function manyPlayersManyMoves( game ){
    
    function whatever( moves ){
	newgame = helpers.makeMovePartFour( game, moves, 1, 1 );
	return newgame;
    }

    return whatever;
}
