// Description
/*
Tea for two!

Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'


/* My solution */
//pseudocode

//String.replace() method to extract a number from a string,
//The replace() method will extract a number from the string by replacing all non-digit characters with empty strings
//The /2/g,character matches a digit from 0 to 9 and letters.

function tea42(input) {

    const str = input.toString();

    const replacNum = str.replace(/2/g, 't');
    //  console.log(replacNum)
    return replacNum
    }
 
 