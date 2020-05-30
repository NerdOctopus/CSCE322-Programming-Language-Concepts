module.exports = {
    readMovesFile:readMovesFile,
    readGameFile:readGameFile,
    printMoves:printMoves,
    printGame:printGame,
    makeMove:makeMove,
    makeMovePartTwo:makeMovePartTwo,
    readMoves:readMoves,
    makeMovePartThree:makeMovePartThree,
    findPlayers:findPlayers,
    makeMovePartFour:makeMovePartFour
}

function readMovesFile( file )
{
    var text;
    var moves = [];
    var rows = [];
    var mvs = [];
    var filesystem = require( 'fs' );

    text = filesystem.readFileSync( file );
    rows = text.toString().split( "\n" );
    rows.pop();
    
    moves = rows[0].split( ',' );

    for( var m = 0; m < moves.length; m++ ){
	mvs[m] = moves[m];
    }
    
    return mvs;
}

function readGameFile( file )
{
    var text;
    var game = [];
    var rows = [];
    var filesystem = require( 'fs' );

    text = filesystem.readFileSync( file );
    rows = text.toString().split( "\n" );
    rows.pop();
    
    for( var r = 0; r < rows.length; r++ ){
	game[r] = rows[r].split( ',' );
    }

    return game;
}


function printMoves( moves ){
    console.log( moves );
}

function printGame( game ){
    for( var r = 0; r < game.length; r++ ){
	console.log( game[r] );
    }
}

function findPlayers( game ){
    var players = 0;
    for( var r = 0; r < game.length; r++ ){
	for( var c = 0; c < game[0].length; c++ ){
	    if( game[r][c] != '-' && game[r][c] != 'x' && parseInt( game[r][c] ) > players ){
		players = parseInt( game[r][c] );
	    }
	}
    }
    return players;
}



function makeMove( game, move, player ){
    //printMoves( move );
    //printGame( game );
    //console.log( players );

    originalgame = game;

    rows = game.toString().split( "\n" );
    rows.pop();

    for( var r = 0; r < rows.length; r++ ){
	game[r] = rows[r].split( ',' );
    }

    for( var w = 0; w < game.length; w++ ){             //for all rows and columns...
    for( var l = 0; l < game[0].length; l++ ){
        if ( move == 'l' ){                             //for a certain move...
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l-1] == 'x'){
                        if( l > 1 ){
                            game[w][l-2] = game[w][l];      //the three changed spaces
                            game[w][l-1] = '-';
                            game[w][l] = 'x';
                            return game;
                        }
                    }
                    else{
                        return originalgame;
                    }
                }catch (e){                             //if we can't do this, return the game
                    return originalgame;
                }
            }
        }
        if ( move == 'r' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l+1] == 'x'){
                        if( l < (game[w].length - 2) ){
                            game[w][l+2] = game[w][l];
                            game[w][l+1] = '-';
                            game[w][l] = 'x';
                            return game;
                        }
                    }
                    else{
                        return originalgame;
                    }
                }catch (e){
                    return originalgame;
                    }
            }
        }
        if ( move == 'u' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w-1][l] == 'x'){
                        if( w > 1 ){
                            game[w-2][l] = game[w][l];
                            game[w-1][l] = '-';
                            game[w][l] = 'x';
                            return game;
                        }
                    }
                    else{
                        return originalgame;
                    }
                }catch (e){
                    return originalgame;
                    }
            }
        }
        if ( move == 'd' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w+1][l] == 'x'){
                        if( w < (game.length - 2) ){
                            game[w+2][l] = game[w][l];
                            game[w+1][l] = '-';
                            game[w][l] = 'x';
                            return game;
                        }
                    }
                    else{
                        return originalgame;
                    }
                }catch (e){
                    return originalgame;
                    }
            }
        }
        //console.log(game[w][l]);
    }
    }
    return game;
}

function makeMovePartTwo( game, moves, player, count ){        //introduce a while loop around everything...
                                                        //while we have moves left, change the game.
                                                        //keep last move's game in case of an illegal move.
                                                        //return our game when we're out of moves.

    count++;
    originalgame = game;

    var movenumber = readMoves( moves );


    rows = game.toString().split( "\n" );
    rows.pop();

    for( var r = 0; r < rows.length; r++ ){
	game[r] = rows[r].split( ',' );
    }

    if( count > movenumber + 1 ){
        return game;
    }

    for( var w = 0; w < game.length; w++ ){             //for all rows and columns...
    for( var l = 0; l < game[0].length; l++ ){
        if ( moves[count-2] == 'l' ){                             //for a certain move...
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l-1] == 'x'){
                        if( l > 1 ){
                            game[w][l-2] = game[w][l];      //the three changed spaces
                            game[w][l-1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                return makeMovePartTwo( game, moves, player, count );
                            }
                        }else{
                            return makeMovePartTwo ( game, moves, player, count );
                        }
                    }else{
                        return makeMovePartTwo ( game, moves, player, count );
                    }
                }catch (e){                             //if we can't do this, return the game
                    return makeMovePartTwo ( game, moves, player, count );
                }
            }
        }
        if ( moves[count-2] == 'r' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l+1] == 'x'){
                        if( l < (game[w].length - 2) ){
                            game[w][l+2] = game[w][l];
                            game[w][l+1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                return makeMovePartTwo( game, moves, player, count );
                            }
                        }else{
                            return makeMovePartTwo ( game, moves, player, count );
                        }
                    }else{
                        return makeMovePartTwo ( game, moves, player, count );
                    }
                }catch (e){
                    return makeMovePartTwo ( game, moves, player, count );
                    }
            }
        }
        if ( moves[count-2] == 'u' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w-1][l] == 'x'){
                        if( w > 1 ){
                            game[w-2][l] = game[w][l];
                            game[w-1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                return makeMovePartTwo( game, moves, player, count );
                            }
                        }else{
                            return makeMovePartTwo ( game, moves, player, count );
                        }
                    }else{
                        return makeMovePartTwo ( game, moves, player, count );
                    }
                }catch (e){
                    return makeMovePartTwo ( game, moves, player, count );
                    }
            }
        }
        if ( moves[count-2] == 'd' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w+1][l] == 'x'){              //what happens if there's an error here?  change the catch to go to the next move?
                        if( w < (game.length - 2) ){
                            game[w+2][l] = game[w][l];
                            game[w+1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                return makeMovePartTwo( game, moves, player, count );
                            }
                        }else{
                            return makeMovePartTwo ( game, moves, player, count );
                        }
                    }else{
                        return makeMovePartTwo ( game, moves, player, count );
                    }
                }catch (e){
                    return makeMovePartTwo ( game, moves, player, count );
                    }
            }
        }
        //console.log(game[w][l]);
    }
    }
    return game;
}

function makeMovePartThree( game, moves, player, count, threecount ){        //introduce a while loop around everything...
                                                        //while we have moves left, change the game.
                                                        //keep last move's game in case of an illegal move.

    players = findPlayers( game );                                                    //return our game when we're out of moves.
    if ( player > players ){
        player = 1;
    }
                                        //if we have looped through all of our players, return the game
    if ( threecount >= players ){       //NEED TO MAKE A CHECK FOR WHERE YOU LAND
        return game;
    }
    threecount++;

    //console.log("players is " + players);
    //console.log("player is " + player);
    //console.log("threecount is " + threecount);

    count++;
    originalgame = game;

    var movenumber = readMoves( moves );


    rows = game.toString().split( "\n" );
    rows.pop();

    for( var r = 0; r < rows.length; r++ ){
	game[r] = rows[r].split( ',' );
    }

    if( count > movenumber + 1 ){
        return game;
    }

    for( var w = 0; w < game.length; w++ ){             //for all rows and columns...
    for( var l = 0; l < game[0].length; l++ ){
        if ( moves[count-2] == 'l' ){                             //for a certain move...
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l-1] == 'x'){
                    if ( game[w][l-2] == 'x'){  //jump into '-' space???
                        if( l > 1 ){
                            game[w][l-2] = game[w][l];      //the three changed spaces
                            game[w][l-1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartThree( game, moves, player, count, threecount );
                            }
                        }else{
                            player++;
                            return makeMovePartThree ( game, moves, player, count, threecount );
                        }
                    }else{
                        player++
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                }catch (e){                             //if we can't do this, return the game
                    player++;
                    return makeMovePartThree ( game, moves, player, count, threecount );
                }
            }
        }
        if ( moves[count-2] == 'r' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l+1] == 'x'){
                    if ( game[w][l+2] == 'x'){
                        if( l < (game[w].length - 2) ){
                            game[w][l+2] = game[w][l];
                            game[w][l+1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartThree( game, moves, player, count, threecount );
                            }
                        }else{
                            player++;
                            return makeMovePartThree ( game, moves, player, count, threecount );
                        }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                }catch (e){
                    player++;
                    return makeMovePartThree ( game, moves, player, count, threecount );
                    }
            }
        }
        if ( moves[count-2] == 'u' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w-1][l] == 'x'){
                    if ( game[w-2][l] == 'x'){
                        if( w > 1 ){
                            game[w-2][l] = game[w][l];
                            game[w-1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartThree( game, moves, player, count, threecount );
                            }
                        }else{
                            player++;
                            return makeMovePartThree ( game, moves, player, count, threecount );
                        }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                }catch (e){
                    player++;
                    return makeMovePartThree ( game, moves, player, count, threecount );
                    }
            }
        }
        if ( moves[count-2] == 'd' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w+1][l] == 'x'){
                    if ( game[w+2][l] == 'x'){
                        if( w < (game.length - 2) ){
                            game[w+2][l] = game[w][l];
                            game[w+1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartThree( game, moves, player, count, threecount );
                            }
                        }else{
                            player++;
                            return makeMovePartThree ( game, moves, player, count, threecount );
                        }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                    }else{
                        player++;
                        return makeMovePartThree ( game, moves, player, count, threecount );
                    }
                }catch (e){
                    player++;
                    return makeMovePartThree ( game, moves, player, count, threecount );
                    }
            }
        }
        //console.log(game[w][l]);
    }
    }
    return game;
}

function makeMovePartFour( game, moves, player, count ){        //introduce a while loop around everything...
                                                        //while we have moves left, change the game.
                                                        //keep last move's game in case of an illegal move.
    players = findPlayers( game );                                                    //return our game when we're out of moves.
    if ( player > players ){
        player = 1;
    }

    count++;
    originalgame = game;                                //NEED TO MAKE A CHECK FOR WHERE YOU LAND

    var movenumber = readMoves( moves );


    rows = game.toString().split( "\n" );
    rows.pop();

    for( var r = 0; r < rows.length; r++ ){
	game[r] = rows[r].split( ',' );
    }

    if( count > movenumber + 1 ){
        return game;
    }

    for( var w = 0; w < game.length; w++ ){             //for all rows and columns...
    for( var l = 0; l < game[0].length; l++ ){
        if ( moves[count-2] == 'l' ){                             //for a certain move...
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l-1] == 'x'){
                    if ( game[w][l-2] == 'x'){
                        if( l > 1 ){
                            game[w][l-2] = game[w][l];      //the three changed spaces
                            game[w][l-1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartFour( game, moves, player, count );
                            }
                        }else{
                            player++;
                            return makeMovePartFour ( game, moves, player, count );
                        }
                    }else{
                        player++
                        return makeMovePartFour ( game, moves, player, count );
                    }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                }catch (e){                             //if we can't do this, return the game
                    player++;
                    return makeMovePartFour ( game, moves, player, count );
                }
            }
        }
        if ( moves[count-2] == 'r' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w][l+1] == 'x'){
                    if ( game[w][l+2] == 'x'){
                        if( l < (game[w].length - 2) ){
                            game[w][l+2] = game[w][l];
                            game[w][l+1] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartFour( game, moves, player, count );
                            }
                        }else{
                            player++;
                            return makeMovePartFour ( game, moves, player, count );
                        }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                }catch (e){
                    player++;
                    return makeMovePartFour ( game, moves, player, count );
                    }
            }
        }
        if ( moves[count-2] == 'u' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w-1][l] == 'x'){
                    if ( game[w-2][l] == 'x'){
                        if( w > 1 ){
                            game[w-2][l] = game[w][l];
                            game[w-1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartFour( game, moves, player, count );
                            }
                        }else{
                            player++;
                            return makeMovePartFour ( game, moves, player, count );
                        }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                }catch (e){
                    player++;
                    return makeMovePartFour ( game, moves, player, count );
                    }
            }
        }
        if ( moves[count-2] == 'd' ){
            if ( game[w][l] == player ){
                try{
                    if ( game[w+1][l] == 'x'){
                    if ( game[w+2][l] == 'x'){
                        if( w < (game.length - 2) ){
                            game[w+2][l] = game[w][l];
                            game[w+1][l] = '-';
                            game[w][l] = 'x';
                            if( count > movenumber + 1 ){
                                return game;
                            }else{
                                player++;
                                return makeMovePartFour( game, moves, player, count );
                            }
                        }else{
                            player++;
                            return makeMovePartFour ( game, moves, player, count );
                        }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                    }else{
                        player++;
                        return makeMovePartFour ( game, moves, player, count );
                    }
                }catch (e){
                    player++;
                    return makeMovePartFour ( game, moves, player, count );
                    }
            }
        }
        //console.log(game[w][l]);
    }
    }
    return game;
}

function readMoves( moves ){

    var newmoves = [];
    var movestostring = moves.toString();
    newmoves = movestostring.split( ',' );

    //console.log(newmoves.length);  //does this finally work?
    return newmoves.length;
}

