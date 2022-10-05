// Description
/*
DESCRIPTION:
Our football team has finished the championship.

Our teams match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x us our teams score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/

//Link: https://www.codewars.com/kata/5bb904724c47249b10000131

/* My solution */
function points(games) {
//pseudocode
//pseudocode
//Each match is represented by a string in the format "x:y"
//x - our team
//y - our opponents 
// we have the array of string
//count the point
//if x is bigger than why we have 3 point
//if its less than 0 point 
//if it equal we have  1 point
// basically i should loop over array over string to check the condition
// check or get the number out of the strings which would be x or y
// compare the points
//convert the array using split
//return the totall amont of sum

let sum = 0;
games.forEach(index => {
    const [x, y] = index.split(':').map(Number); // this will be 1:0 convert to 1.0 using split

    if (x > y) {
        sum += 3;
    } else if (x === y) {
        sum += 1;
    }
});
return sum;
}