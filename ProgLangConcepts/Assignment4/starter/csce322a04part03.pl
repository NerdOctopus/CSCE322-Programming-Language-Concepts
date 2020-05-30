fewestMoves([H|T],[u]):-
    RowUp1 is 0,
    RowUp2 is 0.

fewestMoves([H|T],[d]):-
    RowDown1 is 0,
    RowDown2 is 0.

fewestMoves([H|T],[l]):-
    ColumnLeft1 is 0,
    ColumnLeft2 is 0.

fewestMoves([H|T],[r]):-
    ColumnRight1 is 0,
    ColumnRight2 is 0.