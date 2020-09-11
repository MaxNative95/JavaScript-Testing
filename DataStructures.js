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

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// SECTION ---------------------------------------------------------------------------------------------------------------//
//splice method allows us to do remove any number of consecutive elements from anywhere in an array.

// NOTE
//The first parameter represents the index on the array from which to begin removing elements
//while the second parameter indicates the number of elements to delete

//let array = ['today', 'was', 'not', 'so', 'great', 'cheers', 'babies'];

// array.splice(2, 2);
// console.log(array);

// let newArr = array.splice(1,3);
// console.log(newArr);


//splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
//console.log(newArray)
// newArray equals ['really', 'happy']

// SECTION ---------------------------------------------------------------------------------------------------------------//

//indexOf() allows us to quickly and easily check for the presence of an element on an array
//indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

// SECTION ---------------------------------------------------------------------------------------------------------------//

//Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}




greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]

// SECTION ---------------------------------------------------------------------------------------------------------------//

function filteredArray(arr, elem) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

// /console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// SECTION ---------------------------------------------------------------------------------------------------------------//
//NOTE OBJECTS

// Access Property Names with Bracket Notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {

    return foods[scannedItem]

}

//console.log(checkInventory("apples"));

// SECTION ---------------------------------------------------------------------------------------------------------------//

//Use the delete Keyword to Remove Object Properties

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };


// delete foods.oranges
// delete foods.plums
// delete foods.strawberries

//console.log(foods);

// SECTION ---------------------------------------------------------------------------------------------------------------//

//Check if an Object has a Property
//JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword.

// users.hasOwnProperty('Alan');
// 'Alan' in users;
//  both return true

// let users = {
//     Alan: {
//         age: 27,
//         online: true
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: true
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };

function isEveryoneHere(obj) {
    // Only change code below this line
    if ('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj) {
        return true
    }
    return false
    // Only change code above this line
}

//console.log(isEveryoneHere(users));

// SECTION ---------------------------------------------------------------------------------------------------------------//

let obj = {
    Alan: {
        online: true
    },
    Jeff: {
        online: false
    },
    Sarah: {
        online: true
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let verdaderos = []
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            verdaderos.push(usersObj[user].online)
        }
    }
    return verdaderos.length
    // Only change code above this line
}

countOnline(obj);


// SECTION ---------------------------------------------------------------------------------------------------------------//
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// const getHeroeById = id => heroes.find(element => element.id === id)

// console.log(getHeroeById(4));

// const getHeroeByOwner = owner => heroes.filter(element => element.owner === owner)

// console.log(getHeroeByOwner('DC'));