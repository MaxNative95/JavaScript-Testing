//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 


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


// let arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
// let count = {};
// uniqueCount.forEach(function (i) {
//   count[i] = (count[i] || 0) + 1;
// });
// console.log(count);

getDuplicated = (arr, letter) => {
  var duplicated = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(letter === element){
      console.log('Elemento duplicado', letter);
      duplicated.push(letter);
    }
  }
  var duplicatedLength = duplicated.length;
  console.log(`Letter duplicated ${duplicatedLength} times`);
}

var arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

getDuplicated(arr, "a")

