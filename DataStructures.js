//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 

// SECTION ---------------------------------------------------------------------------------------------------------------//
let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

// for (let i = 0; i < complexArray.length; i++) {
//     let element = complexArray[i][0];
//     console.log(element);
// }

// SECTION ---------------------------------------------------------------------------------------------------------------//

// NOTE
// push method adds an item to the end of an array
// NOTE
// unshift method adds an item to the beggining of the array


let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

function mixedNumbers(arr) {
  
    arr.unshift('I', 2, 'three'); 
    arr.push(7, 'VIII', 9);
    
    return arr;
  }
  
  //console.log(mixedNumbers(['IV', 5, 'six']));

// SECTION ---------------------------------------------------------------------------------------------------------------//

// NOTE
// pop method removes an element from the end of an array
// NOTE
// shift method removes an element from the beginning

//The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, 
//and each only allows an array to be modified by a single element at a time.

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

