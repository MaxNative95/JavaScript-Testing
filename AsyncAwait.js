let letters = 'The ENd of My Trip';

for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
        letters[i].toUpperCase()
    } else {
        letters[i].toLowerCase()
    }
    console.log(letters);
}

console.log(letters);
