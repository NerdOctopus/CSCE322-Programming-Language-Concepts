:- module( helpers,
	 [ readExtremePegSolitaireFile/3
	 , printGame/1
	 ]
    ).

prefix([H],[]).
prefix([H|T],[H|PreT]):-
    prefix(T,PreT).

readExtremePegSolitaireFile(File,Moves,Game):-
    open(File,read,Input),
    read(Input,Moves),
    readGame(Input,Temp),
    prefix(Temp,Game),
    close(Input).

readGame(Input,[]):-
    at_end_of_stream(Input),
    !.
readGame(Input,[Row|Rows]):-
    \+ at_end_of_stream(Input),
    read(Input,Row),
    readGame(Input,Rows).

printGame(Game):-
    writeln(game),
    printRows(Game).
    
printRows([]).
printRows([Row|Rows]):-
    writeln(Row),
    printRows(Rows).

