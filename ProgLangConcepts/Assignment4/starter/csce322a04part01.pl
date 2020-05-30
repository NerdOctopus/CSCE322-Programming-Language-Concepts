columnsAndRows([H|T]):-
    length([H|T],ColumnCount),
    length(H,RowCount),
    0 is mod(ColumnCount,2),
    0 is mod(RowCount,2).

columnsAndRows([H|T]):-
    length([H|T],ColumnCount),
    length(H,RowCount),
    1 is mod(ColumnCount,2),
    1 is mod(RowCount,2).