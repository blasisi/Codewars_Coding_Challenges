// Description
/*
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/


/* My solution */
function doubleChar(str) {
    // Your code here
    const repeatedChar = str.split('').map( x => x + x).join('');
  return repeatedChar
  }