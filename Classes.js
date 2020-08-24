//COMMENTS TYPES
// ANCHOR 
// TODO
// FIXME
// STUB
// NOTE
// REVIEW
// SECTION 


// SECTION ---------------------------------------------------------------------------------------------------//

//ES5
// var SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');


//ES6
// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter');

// SECTION ---------------------------------------------------------------------------------------------------//

//GETTERS SETTERS
// class Book {
//   constructor(author) {
//     this._author = author
//   }

//   get author() {
//     return this._author;
//   }

//   set author(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }

// const lol = new Book('anonymous');
// console.log(lol.author);  // anonymous
// lol.author = 'wut';
// console.log(lol.author);  // wut

// SECTION ---------------------------------------------------------------------------------------------------//

// class Thermostat{
//     constructor(fahrenheit){
//       this._fahrenheit = fahrenheit
//     }

//     get temperature(){
//       return this._fahrenheit;
//     }

//     set temperature(updatedData){
//       this._fahrenheit = updatedData
//     }

//   }
//   // Only change code above this line
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius

// SECTION ---------------------------------------------------------------------------------------------------//

class Rectangulo {

  constructor(base, altura) {
    this.base = base;
    this.altura = altura
  }

   static getAnotherData(){
    return console.log(10 * 20 + 10);
  }

  calcularArea() {
    return this.base * this.altura;
  }

}

let r = new Rectangulo(10, 20);
let res = r.calcularArea()
Rectangulo.getAnotherData()
console.log(res);