//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 


// SECTION ---------------------------------------------------------------------------------------------------//

// function sum(arr, n) {
//     // Only change code below this line
//     console.log(arr)
//     console.log(n)
//     if (n === 0) {
//         return 0
//     } else {
//         return console.log(sum(arr, n - 1) + arr[n - 1]);
//     }
//     // Only change code above this line
// }

// sum([2, 3, 4, 5], 3)// should equal 9.

// SECTION ---------------------------------------------------------------------------------------------------//

var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];



// for (var x = 0; x < contacts.length; x++) {
//     if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//             return contacts[x][prop];
//         } else {
//             return "No such property";
//         }
//     }
// }
// return "No such contact";

// SECTION ---------------------------------------------------------------------------------------------------//

// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       console.log(countArray.push(n));
//       return countArray;
//     }
//   }
//   console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// SECTION  ---------------------------------------------------------------------------------------------------//
// NOTE 
let array = [
  { id: 1, monto: 1000, mes: 'Enero' },
  { id: 2, monto: 2000, mes: 'Febrero' },
  { id: 3, monto: 2200, mes: 'Abril' },
  { id: 4, monto: 9000, mes: 'Junio' },
  { id: 5, monto: 2900, mes: 'Diciembre' },
  { id: 6, monto: 4500, mes: 'Noviembre' }
]

let amounts = [];
array.map((item ,i ) => {
  console.log(item.monto);
  amounts.push(item.monto);
});
console.log(amounts);
let total = amounts.reduce((a,b) => {
  return a + b;
},0)

console.log(`El total de la suma de montos del array es ${total}`);

// SECTION ---------------------------------------------------------------------------------------------------//


// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 2
// console.log(i);
// // returns "i is not defined"

// SECTION ---------------------------------------------------------------------------------------------------//

// function printManyTimes(str) {
//   "use strict";

//   // Only change code below this line

//   const SENTENCE = str + " is cool!";
//   for (let i = 0; i < str.length; i+=2) {
//     console.log(SENTENCE);
//   }

//   // Only change code above this line

// }

// printManyTimes("freeCodeCamp");

// SECTION ---------------------------------------------------------------------------------------------------//


// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// }

// console.log(sum(2, 3, 4))

// SECTION ---------------------------------------------------------------------------------------------------//

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr); // returns 89
// console.log(maximus)


// SECTION ---------------------------------------------------------------------------------------------------//


// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   "use strict";
//   // Only change code below this line
//   const [a, b, ...arr] = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr)

// SECTION ---------------------------------------------------------------------------------------------------//


// const argumentos = {
//   name: "Max",
//   lastName: "Garcia",
//   age: 24
// }

// checkArgs = ({ name, age }) => {
//   console.log(name, age)
// }

// checkArgs(argumentos)

// SECTION ---------------------------------------------------------------------------------------------------//

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // Only change code below this line
//   let resultDisplayArray = [];
//   for(let i=0; i<arr.length; i++){
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   console.log(resultDisplayArray)
//   // Only change code above this line

//   return resultDisplayArray;
// }

// const resultDisplayArray = makeList(result.failure);


// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Destructuring and passing an object through function

// let obj = { name: 'Max', lastName: 'Garcia', age: 25 };

// getInfo = ({ name, lastName, age }) => {
//   return console.log(`My name is ${name}, lastname ${lastName} and i am ${age} years old`)
// }

// getInfo(obj);

// SECTION ---------------------------------------------------------------------------------------------------//

// multiplicador = (multiplicando, ...numeros) => {
//   return numeros.map((item, i) => {
//     return multiplicando * item
//   })
// }

// var result = multiplicador(10, 3, 1, 2);
// console.log(result);

// SECTION ---------------------------------------------------------------------------------------------------//

// ordenarNumeros = (...numeros) => {
//   return console.log(numeros.sort());
// }

// ordenarNumeros(5, 4, 6, 1, 3);