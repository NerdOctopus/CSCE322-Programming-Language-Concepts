grammar csce322a01part02;


@members{
int players = 0;
int whitespace = 0;
int rest = 0;
boolean up = false;
boolean down = false;
boolean left = false;
boolean right = false;
boolean error = false;
double emptycount = 0;
int emptycount2 = 0;
int rowcount = 0;
double spaces = 0;
int gamecount = 0;
int movescount = 0;
}

// rules
extremePegSolitaire : game moves rules EOF | moves game rules EOF;
game : GHEADER STARTTAG STARTBRACE rowlist ENDBRACE ENDTAG {gamecount++;};
moves : MHEADER STARTTAG CARAT movelist DOLLAR ENDTAG {movescount++;};
rowlist : row ROWEND row ROWEND row ROWEND row ROWEND row ROWEND row ROWEND row ROWEND row ROWEND (row ROWEND)+ row;
row : space space space space space space space space space space +;
space : PEG {spaces++;}
      | EMPTYSPACE {emptycount++; emptycount2++; spaces++;}
      | PLAYER {players++; spaces++;}
      ;
movelist : move move move move move +;
move : (direction COMMA)
     | direction
     ;
direction : UP {up = true;}
          | DOWN {down = true;}
          | LEFT {left = true;}
          | RIGHT {right = true;}
          ;


rules: {

if ((emptycount / spaces) > .4){
    System.out.println("SEMANTIC PROBLEM 2");
    error = true;
}

if (players < 2 || players > 4){
    System.out.println("SEMANTIC PROBLEM 1");
    error = true;
}

if (up == false || down == false || left == false || right == false){
    System.out.println("SEMANTIC PROBLEM 3");
    error = true;
}

if (error == false) {
    System.out.println("There are " + emptycount2 + " empty spaces on the board");
}
};

// tokens

WS : [ \t\r\n] -> skip;
GHEADER : '!game';
MHEADER : '!moves';
STARTTAG : '>>';
ENDTAG : '<<';
STARTBRACE : '{';
ENDBRACE : '}';
CARAT : '^';
DOLLAR : '$';
PEG : 'x';
EMPTYSPACE : '-';
PLAYER : [0-9];
UP : 'u';
DOWN : 'd';
LEFT : 'l';
RIGHT : 'r';
ROWEND : '*';
COMMA : ',';
