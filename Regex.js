//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 

// NOTE NOW WE ARE USING THE TEST METHOD 

// let sentence = "The dog chased the cat"
// let reg = /T/;

// let result = reg.test(sentence);

// console.log(result);

// SECTION ---------------------------------------------------------------------------------------------------//

// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; // What makes i is that does not care about upper or lower case 
// let result = fccRegex.test(myString);

// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

// 'string'.match(/regex/);
// /regex/.test('string');

// "Hello, World!".match(/Hello/);
// // Returns ["Hello"]
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// Returns ["expressions"]


// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Wildcard Period

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr); // Returns true
// huRegex.test(hugStr); // Returns true


// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match a Literal String with Different Possibilities

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird/; // To serach for differenet posibilities we use the | operator
// let result = petRegex.test(petString);


// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE To search or extract a pattern more than once, you can use the g flag

// let testStr = "Repeat, repeat, repeat";
// let repeatRegex = /Repeat/gi;
// testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

// SECTION 
// NOTE Match Anything with Wildcard PeriodPassed

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./; 
// let result = unRegex.test(exampleStr);
// console.log(result)

// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match Single Character with Multiple Possibilities

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
//bigStr.match(bgRegex); // Returns ["big"]
//bagStr.match(bgRegex); // Returns ["bag"]
//bugStr.match(bgRegex); // Returns ["bug"]
//bogStr.match(bgRegex); // Returns null

// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match Letters of the Alphabet

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/; //Inside a character set, you can define a range of characters to match using a hyphen character: -
// catStr.match(bgRegex); // Returns ["cat"]
// batStr.match(bgRegex); // Returns ["bat"]
// matStr.match(bgRegex); // Returns null

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match Numbers and Letters of the Alphabet

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// jennyStr.match(myRegex);

//SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match Single Characters Not Specified. For example, /[^aeiou]/gi matches all characters that are not a vowel

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi; 
// let result = quoteSample.match(myRegex);

//SECTION ---------------------------------------------------------------------------------------------------//
// NOTE We use the plus + sign to look for characters that occur one or more times

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi; // Change this line
// let result = difficultSpelling.match(myRegex);

// SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Match Characters that Occur Zero or More Times. There's also an option that matches characters that occur zero or more times.
//  The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

//SECTION ---------------------------------------------------------------------------------------------------//
// NOTE Lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

//  let string = "titanic"
//  let regex = /t[a-z]*i/; //This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
//  let regex2 = /t[a-z]*?i/;
//  let result = string.match(regex);
// console.log(result) 


// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h.*?1>/; 
// let result = text.match(myRegex);
// console.log(result)

//SECTION ---------------------------------------------------------------------------------------------------//
// TODO EXAM 

