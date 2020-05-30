module.exports = {
    onePlayerOneMove: onePlayerOneMove
}

var helpers = require( './helpers' );
//import {makeMove} from '.helpers.js';

function onePlayerOneMove( game ){

    function whatever( move ){
    newgame = helpers.makeMove( game, move, 1 );
    return newgame;
    }

    return whatever;
}