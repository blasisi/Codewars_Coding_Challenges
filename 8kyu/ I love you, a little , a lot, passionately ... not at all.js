// Description
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

Link: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
*/

/* My solution */
function howMuchILoveYou(nbPetals) {


     // Pseudocode
  //I read the description
  //The description says if there more than 6 petals , it will say i love you
  //Goal is to determine which phrases the girl would say the last petal for a flower
  //key point here : The number of the petals is always greater than 0
  // In the case we need to set a condition that would loop if the petals is greater than 7 and set the initial start to 0r
  //create list of the phases
  //Loop  for each petal using devision(remainder) to access the property 


  const phaseObj = {
    0: "not at all",
    1: "I love you" ,
    2: "a little" ,
    3: "a lot",
    4: "passionately",
    5: "madly"
  }; //created  list of phase  with number and values added all the phrases each time a petal was torn into object.
//     console.log(phaseObj);
  return phaseObj [nbPetals % 6];;// return the phase and using remainder operator 
}

//   // Pseudocode
//   //I read the description
//   //The description says if there more than 6 petals , it will say i love you
//   //Goal is to determine which phrases the girl would say the last petal for a flower
//   //key point here : The number of the petals is always greater than 0
//   // In the case we need to set a condition that would loop if the petals is greater than 7 and set the initial start to 0
//   //delear

//   //dealare an arr and add to the list
//   //loop  for each petal
//   //push
//   // return Pseudocode

//   function howMuchILoveYou(nbPetals) {
//     // your code
//     let phaseObj = {
//       0: "I love you",
//       1: "a little",
//       2: "a lot",
//       3: "passionately",
//       4: "madly",
//       5: "not at all",
//     }; //Declare empty object and  added all the phrases each time a petal was torn into object.
//     console.log(phaseObj);
//     return phaseObj[nbPetals % 6];//remainder operator is used to return the remainder to divide, when it loop to 0 it accesses i love ,then jump to two until  than 6  

//     for (let i = 0; i <= nbPetals; i++) {
//       //start initiation at 0, and stop it when its greater or equal to 7 petal and add one each the the loops runs
//       phaseObj.push(phaseObj[i]); //add phaseObj to the list
//     }
//     return phaseObj[nbPetals - 1];// the petal with  only one petal should return not at all, but returns i love you
//   }
// }
