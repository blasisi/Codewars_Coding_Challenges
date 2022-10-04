// Description
/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

Link:https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

*/




/* My solution */

//pseudocode
//First i read the description
// Description stated that Array have three values (tall,body,head)
//I need to rearrange the arrange so the animal is the right way round (head,body,tail)
// In this case i will first console.log the arr to check what is currently in the fixTheMeerkat arr parameter
//Then sort it by reverse the list in order to rearrange the list.
//The return the new list 

//Reverse method reverse the array in place , so the first array element becomes the last and the last array element becomes the first
const reverseList = arr.reverse();
// // console.log(reverseList)
return reverseList;
//   return arr.reverse();
//   }