grammar csce322a01part01;

extremePegSolitaire : (gheader | mheader | starttag | endtag | startbrace | endbrace | carat | dollar | peg | emptyspace | player | direction | rowend | comma | error)+ eof;

gheader : GHEADER {System.out.println("game Section");};
mheader : MHEADER {System.out.println("moves Section");};
starttag : STARTTAG {System.out.println("Begin the Section");};
endtag : ENDTAG {System.out.println("End the Section");};
startbrace : STARTBRACE {System.out.println("Start the Game");};
endbrace : ENDBRACE {System.out.println("End the Game");};
carat : CARAT {System.out.println("Begin the List");};
dollar : DOLLAR {System.out.println("End the List");};
peg : PEG {System.out.println("Space: " + $PEG.text);};
emptyspace : EMPTYSPACE {System.out.println("Space: Empty");};
player : PLAYER {System.out.println("Space: " + $PLAYER.text);};
direction : DIRECTION {System.out.println("Move: " + $DIRECTION.text);};
rowend : ROWEND {System.out.println("End the Row");};
comma : COMMA;
error : ERROR {System.out.println("SYNTAX ERROR IN LINE " + $ERROR.getLine()); System.exit(1);};
eof : EOF {System.out.println("End the File");};

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
DIRECTION : 'u' | 'd' | 'l' | 'r';
ROWEND : '*';
COMMA : ',';
ERROR : . ;