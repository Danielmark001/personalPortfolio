const javascript = `
# Javascript DSA

# Table of Contents

- [Arrays](#Arrays)
- [setTimeout](#setTimeout)

### Arrays (#Arrays)

### Common operations.

Example involves \`const array = [1,2,3,4,5]\`

| Operation                         | Description                                                                                             |                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| length                            | Finds the size of the array. Remember no bracket included → not a method call                           |                                                                                |
| pop()                             | Remove last element                                                                                     |                                                                                |
| push()                            | Append new element to the end                                                                           |                                                                                |
| shift()                           | Remove first element                                                                                    |                                                                                |
| unshift()                         | Append new element at the start                                                                         |                                                                                |
| sort()                            | Sorts the element                                                                                       |                                                                                |
| filter()                          | Filters the element based on the function supplied. Need to assign to a new array constant              | const filteredArray = array.filter((value) => value > 2 ) // returns [3, 4, 5] |
| map()                             | Maps each element in the array. Need to assign to a new array constant                                  | const mappedArray = array.map((value) => value \* 2)                           |
| forEach()                         | Calls a function to each element in the array but not updating the array like map                       | array.forEach((value) => console.log(value \* 4))                              |
| find()                            | Returns the first element that satisfies the function                                                   | array.find((value) => value > 3) // RETURNS 4                                  |
| includes()                        | Returns a boolean value to indicate if the element is in the array                                      | array.includes(3) // RETURNS TRUE                                              |
| reverse()                         | Reverses the array.                                                                                     |                                                                                |
| every()                           | Calls a function to each element in the array and returns a boolean if it is executed for every element |                                                                                |
| join()                            | Returns a string after joining each element in the array                                                | array.join(" ") // RETURNS 5 4 3 2 1                                           |
| indexOf()                         | Finds the first index of a certain element. -1 if not found                                             |                                                                                |
| findIndex() / findLastIndex()     | Returns the first/last index of the element that satisfies the function. -1 if not found                |                                                                                |
| Array.from()                      | Shallow copies an array. Assigns elements by reference                                                  |                                                                                |
| Array(SIZE).fill(ELEMENT)         | Fills the elements in the array with the specified value                                                | Array(5).fill(0) // RETURNS [ 0, 0, 0, 0, 0 ]                                  |
| slice()                           | Returns an array of the selected elements from start to end (not inclusive)                             | (array.slice(2)) // RETURNS [3,4,5]                                            |
| (array.slice(2,3)) // RETURNS [3] |
| splice()                          | Removes the element from the starting index by the specified number of elements                         | array.splice(1,2) // RETURNS [1,4,5]                                           |
| concat()                          | Joins multiple arrays                                                                                   |                                                                                |

1. Making a matrix in Javascript

   \`\`\`var matrix = Array.from({ length: text1.length }, () => Array(text2.length).fill(0)); \`\`\`

2.

### setTimeout (#setTimeout)


`;

export default javascript;