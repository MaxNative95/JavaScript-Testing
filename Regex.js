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
//In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set 
//in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// // Returns true
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // Returns false

//SECTION ---------------------------------------------------------------------------------------------------//
//You can search the end of strings using the dollar sign character $ at the end of the regex

// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// // Returns true
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// // Returns false


//SECTION ---------------------------------------------------------------------------------------------------//
//Match all letters and numbers with w
//These shortcut character classes are also known as shorthand character classes

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers); // Returns true
// shortHand.test(numbers); // Returns true
// longHand.test(varNames); // Returns true
// shortHand.test(varNames); // Returns true


// let alphaNumeric = "The 0ld town road h4as b33n hard";
// let regEx = /[\w+]/g;
// let res = alphaNumeric.match(regEx).length
// console.log(`The total of alphanumeric items is ${res}`);

//SECTION ---------------------------------------------------------------------------------------------------//
// shortcut word W is the opposite of the lowercase letter w, it matches what is not alphanumeric 

// let shortHand = /\W/g;
// let numbers = "42%";
// let sentence = "Coding!";
// console.log(numbers.match(shortHand)); // Returns ["%"]
// console.log(sentence.match(shortHand)); // Returns ["!"]


//SECTION ---------------------------------------------------------------------------------------------------//
// shortcut for match all numbers. The shortcut to look for digit characters is \d, with a lowercase d. 
//This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; 
// let result = movieName.match(numRegex).length;
// console.log(result);

//SECTION ---------------------------------------------------------------------------------------------------//
//Match all no numbers. The shortcut to look for non-digit characters is \D. 
//This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; 
// let result = movieName.match(noNumRegex).length;
// console.log(result);

//SECTION ---------------------------------------------------------------------------------------------------//
//Regular Expresion to test for usernames
// let username = "AA";
// let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
// let result = userCheck.test(username);
// console.log(result); // returns true if 

//SECTION ---------------------------------------------------------------------------------------------------//
//You can search for whitespace using \s, which is a lowercase s

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// // Returns [" ", " "]


//SECTION ---------------------------------------------------------------------------------------------------//
// You can also search for everything except whitespace

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// console.log(result);

//SECTION ---------------------------------------------------------------------------------------------------//
//You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and })

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// console.log(multipleA.test(A4)); // Returns true
// console.log(multipleA.test(A2)); // Returns false


// let ohStr = "Ohhhhhhh no";
// let ohRegex = /Oh{2,5}\S no/; // Change this line
// let result = ohRegex.test(ohStr);

// console.log(result);

//We can also use this pattern to specify a no upper limit, like so 
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/;
// let result = haRegex.test(haStr);

//SECTION ---------------------------------------------------------------------------------------------------//
//Sometimes you only want a specific number of matches

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4); // Returns false
// multipleHA.test(A3); // Returns true
// multipleHA.test(A100); // Returns false

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; 
// let result = timRegex.test(timStr);

//SECTION ---------------------------------------------------------------------------------------------------//
//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. 
//You can think of this symbol as saying the previous element is optional.

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

//SECTION ---------------------------------------------------------------------------------------------------//
//Positive and Negative Lookahead
//Positive (?=...)
//Negative (?!...)

// Los lookaheads son patrones que le dicen a JavaScript que mire hacia adelante en su cadena para buscar patrones más adelante.
// Esto puede ser útil cuando desea buscar múltiples patrones en la misma cadena.
// Hay dos tipos de lookaheads: lookahead positivo y lookahead negativo.
// Una búsqueda anticipada positiva buscará asegurarse de que el elemento en el patrón de búsqueda esté allí, 
// pero en realidad no coincidirá.Se utiliza una búsqueda anticipada positiva como(? = ...) donde ...es la parte requerida que no coincide.
// Por otro lado, una búsqueda anticipada negativa buscará asegurarse de que el elemento en el patrón de búsqueda no esté allí.
// Se usa un lookahead negativo como(?! ...) donde el ...es el patrón en el que no desea estar allí.
// El resto del patrón se devuelve si la parte negativa anticipada no está presente.
// Los lookaheads son un poco confusos, pero algunos ejemplos ayudarán.


// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex)); // Returns ["q"]
// console.log(noquit.match(qRegex)); // Returns ["q"]


//A more practical use of lookaheads is to check two or more patterns in one string. 
//Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns 

//Another use case for passwords
// let sampleWord = "astronaut";
// let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/g; 
// let result = pwRegex.test(sampleWord);


//SECTION ---------------------------------------------------------------------------------------------------//
//Check For Mixed Grouping of Characters

// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// Returns true

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franlkin|Eleanor).*Roosevelt/; // Change this line
// console.log(myRegex.test(myString)); // Change this line

// After passing the challenge experiment with myString and see how the grouping works

//SECTION ---------------------------------------------------------------------------------------------------//
//You can also use a regex with the replace method like so

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // Returns "The sky is blue."

// //You can also access capture groups in the replacement string with dollar signs ($)
// let res = "one two three".replace(/(\w+)\s(\w+)\s(\w+)/, '$3 $2 $1');
// console.log(res);
// Returns "Camp Code"

//SECTION ---------------------------------------------------------------------------------------------------//
//How to remove spaces from the beggining and the end of the string
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
