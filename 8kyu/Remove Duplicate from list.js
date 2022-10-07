// Description
/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
Link: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
*/


/* My solution */

function distinct(a) {
  
    //remove most occur number in array
    // loop over element in the arr
    //push into array if its doesnt exit in the array
  //   const uniqueNum =[...new Set(a)];
    let uniqueNum =[];
    a.forEach(ele => {
        if(!uniqueNum.includes(ele)){
          uniqueNum.push(ele)
        }
  
    })
    return uniqueNum
  }