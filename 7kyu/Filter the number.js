// Description:
/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

/* My solution */
function  filterString (value) {
    //parse a string into a number,
    //replace to remove the a specific chacters
    //regex is used as the first argumen of replace, to check the a pattern where any part of the string match to be replaced
 //    return parseInt(value.replace(/[a-z]/g, ''));
 
 const newStr = parseInt(value.replace(/[a-z]/g, ''))
    return newStr
 }