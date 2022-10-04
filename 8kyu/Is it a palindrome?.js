// Description
/*
Write a function that checks if a given string (case insensitive) is a palindrome.

*/


/* My solution */

function isPalindrome(x) {
    const converToLowerCase = x.toLowerCase();
   
     const checkingLowerCase = converToLowerCase;
   
     // get the backward version of the lowercase string
     const reverse = converToLowerCase.split("").reverse().join("");
   
     // check if the forward string is the same as the backward string
     return checkingLowerCase === reverse;
   }