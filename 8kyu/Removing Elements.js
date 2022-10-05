// Description
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

Link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
*/


/* My solution */



function removeEveryOther(arr) {
    //pseudocode

    //your code here
    //Read the instruction
    //take arr and remove every second element 
    //position one the index is "Keep" [0], Remove[1],"Keep" [2], Remove[3],
    //Every old index need to go
    // use filter method to remove element from array
    //Every element starting from index 2, will be removed
    // look to see if the index mod 2 is even to 0

    const filterEle = arr.filter((element, index) => index % 2 === 0)



    return filterEle

}

