printSequences([]).
printSequences([Sequence|Sequences]):-
    writeln(Sequence),
    printSequences(Sequences).

loadHelpers:-
    ['helpers'],
    ['csce322a04part01'],
    ['csce322a04part02'],
    ['csce322a04part03'],
    ['csce322a04part04'].
    
part01:-
    readExtremePegSolitaireFile('test04.eps',_,Game),
    printGame(Game),
    columnsAndRows(Game).
    
part02:-
    readExtremePegSolitaireFile('test04.eps',_,Game),
    printGame(Game),
    openSpaces(Game).
    
part03:-
    readExtremePegSolitaireFile('test04.single.eps',_,Game),
    printGame(Game),
    setof(Moves,fewestMoves(Game,Moves),AllMoves),
    writeln(moves),
    printSequences(AllMoves).
    
part04:-
    readExtremePegSolitaireFile('test04.eps',_,Game),
    printGame(Game),
    noIslands(Game).
