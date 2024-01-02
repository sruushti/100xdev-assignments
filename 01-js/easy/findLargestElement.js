/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    if (numbers.length == 0)
        return undefined;
    let max = Math.max(...numbers); //spread function which spreads the elements of array as individual arguements
    return max;

}

module.exports = findLargestElement;