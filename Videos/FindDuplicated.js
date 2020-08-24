getDuplicated = (arr, letter) => {
    let duplicated = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(letter === element ){
            console.log(`Element duplicated ${letter}`);
            duplicated.push(letter);
        }
    }
    let duplicatedLength = duplicated.length;
    console.log(`Single letter ${letter} is duplicated ${duplicatedLength} times`);
}

//es6
let arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

getDuplicated(arr, "b");