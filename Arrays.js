//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 

// SECTION ---------------------------------------------------------------------------------------------------//

// let array = [9, 2, 1, 4, 5, 3, 6, 7, 8, 0]

// let sortedArray = array.sort((a, b) => a - b);

// console.log(sortedArray);

// var numArray = [0, 9, 8, 5, 4, 2, 3, 140000, 104, 99];

// for (var i = 0; i < numArray.length; i++) {
//   var target = numArray[i];
//   for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
//     numArray[j + 1] = numArray[j];
//   }
//   numArray[j + 1] = target
// }
// console.log(numArray);

// SECTION ---------------------------------------------------------------------------------------------------//
// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// console.log(ourPets[0].names[1]);

// SECTION ---------------------------------------------------------------------------------------------------//

// let arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a", "a"];
// let count = [];
//  arr.forEach(function (i) {
//   count[i] = (count[i] || 0) + 1;
// });
// console.log(count);

// SECTION ---------------------------------------------------------------------------------------------------//

// getDuplicated = (arr, letter) => {
//   var duplicated = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(letter === element){
//       console.log('Elemento duplicado', letter);
//       duplicated.push(letter);
//     }
//   }
//   var duplicatedLength = duplicated.length;
//   console.log(`Letter ${letter} is duplicated ${duplicatedLength} times`);
// }

// var arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

// getDuplicated(arr, "a")

// SECTION ---------------------------------------------------------------------------------------------------//

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   // loops one too many times at the end
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   // loops one too few times and misses the first character at index 0
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   // Goldilocks approves - this is just right
//   console.log(alphabet[k]);
// }

// SECTION ---------------------------------------------------------------------------------------------------//

// Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      row = [];
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  //console.log(matrix);

  // SECTION ---------------------------------------------------------------------------------------------------//

  const dates = [
    {date:'1/8/2020'},
    {date:'1/8/2020'},
    {date:'1/8/2020'},
    {date:'1/8/2020'}
  ]