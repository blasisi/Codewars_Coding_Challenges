// Description:
/*
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.*/


/* My solution */
function double(array) {
    return array.map(double => double * 2);
    }