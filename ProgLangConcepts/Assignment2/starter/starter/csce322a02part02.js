module.exports = {
    onePlayerManyMoves: onePlayerManyMoves
}

var helpers = require( './helpers' );

function onePlayerManyMoves( game ){
    
    function whatever( moves ){
    newgame = helpers.makeMovePartTwo( game, moves, 1, 1 );
    //newgame = helpers.readMoves( moves );
	return newgame;
    }

    return whatever;
}


/*
I hear the train a comin'
It's rolling round the bend
And I ain't seen the sunshine since I don't know when,
I'm stuck in Homework prison, and time keeps draggin' on
But that train keeps a rollin' on down to San Anton
When I was just a baby my mama told me, son
Always be a good boy, don't ever play with guns.
But I shot a man in Reno just to watch him die
When I hear that whistle blowing I hang my head and cry
I bet there's rich folks eating in a fancy dining car
They're probably drinkin' coffee and smoking big cigars.
Well I know I had it coming, I know I can't be free
But those people keep a movin'
And that's what tortures me
Well if they'd free me from this prison,
If that railroad train was mine
I bet I'd move it all a little further down the line
Far from Homework prison, that's where I want to stay
And I'd let that lonesome whistle blow my blues away
*/