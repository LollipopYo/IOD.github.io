// 1.

// "" + 1 + 0//  = 10 because string + number
// "" - 1 + 0// = 10 because string + number
// true + false// = 1 because tin JS True = 1 False = 0
// !true// not true
// 6 / "3"// 2
// "2" * "3"// 6
// 4 + 5 + "px"// 9px because number + number + string
// "$" + 4 + 5// $45 because string + number
// "4" - 2// 2
// "4px" - 2// 4px -2 because one is string, one is value
// " -9 " + 5// -9 5 becuase one is negative which is a string and one is positive there for the + will be a concat
// " -9 " - 5// -14
//  null + 1// 1 becuase null represents as 0
//  undefined + 1// NaN becuase undefined in not a number
//  undefined == null// True as it looks at type
//  undefined === null// False because its cannot be represented with the same value
//  " \t \n" - 2// NaN becuase t & n cannot be represented by a number

// 2.

// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four // 34
// let multiplication = three * four // 12
// let division = three / four // 0.75
// let subtraction = three - four // -1
// let lessThan1 = three < four // true
// let lessThan2 = thirty < four // true

// // Let addition is providing 34 as the + is concating the numbers 3 and 4
// // To fix this we can add a +sign in front +three + +four

// 3.

// if (0) console.log('#1 zero is true');     // No output, 0 is false no value
// if ("0") console.log('#2 zero is true');   // Output: #2 zero is true, 0 is a string
// if (null) console.log('null is true');      // No output, null is false not value
// if (-1) console.log('negative is true');   // Output: negative is true, -1 is a value
// if (1) console.log('positive is true');    // Output: positive is true, 1 is a value

// 4.

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// console.log(result);

// += is to adding value to a variable
// let a = 5, b = 6;
// let result = `${a} + ${b} is is ${a + b <10? 'less than 10' : 'greater than 10'}`;

// 5.

// name="John"

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }

// // a)
// const FunctionExpression = function (name) {
//     return 'Hello' + name +"!";
// }

// // b)

// const ArrowFunction = (name) => 'Hello' + name +"!";

// console.log(getGreeting(name));
// console.log(FunctionExpression(name));
// console.log(ArrowFunction(name));

// 6;

// const westley = {
//   name: "Westley",
//   numFingers: 5,
// };
// const rugen = {
//   name: "Count Rugen",
//   numFingers: 6,
// };
// const inigo = {
//   firstName: "Inigo",
//   lastname: "Montoya",
//  greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastname}. `;
//     console.log(greeting + this.getCatchPhrase(person));
//   },

//   getCatchPhrase(person) {
//     if (person.numFingers === 6) {
//       return "You killed my father. Prepare to die.";
//     } else {
//       return "Nice to meet you.";
//     }
//   },
// };

// // getCatchPhrase(person){
// //     return person.numFingers === 6
// //     ? "You killed my father. Prepare to die."
// //     :"Nice to meet you.";
// // }
// // };

// inigo.greeting(westley);
// inigo.greeting(rugen);

// 7.

// const basketballGame = {
//     score: 0,

//     freeThrow() {
//     this.score++;
//     return this;
//     },
//     basket() {
//     this.score += 2;
//     // return this;
//     },
//     threePointer() {
//     this.score += 3;
//     return this;
//     },
//     halfTime() {
//     console.log('Halftime score is '+ this.score);
//     return this;
//     },

//     fullTime() {
//      console.log('Fulltime score is'+ this.score);
//     }

// }

//     //modify each of the above object methods to enable function chaining as below:
//     // console.log(basketballGame.basket())

//     // .freeThrow().freeThrow().basket().threePointer().halfTime();

//     basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

// 8.

// function printdetails (city) {

//     for(let property in city){
//         console.log(`${property}:${city[property]}`);
//     }
// }

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// };

// printdetails(sydney);

// const auckland = {

//     name: 'Auckland',
//     population: 10_000,
//     state: 'New Zealand',
//     founded: 'Some time ago',
//     timezone: '+8'

// };

// printdetails (auckland);

// 9.

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian'};
// let moreSports = [...teamSports];
// moreSports.push('Table Tennis');
// moreSports.unshift('Basketball');
// let dog2 = dog1;
// dog2 ='Indigo';
// let cat2 = {...cat1};
// cat2.name = 'Happy';

// console.log('teamSports:'+teamSports);
// console.log('moreSports:'+moreSports);
// console.log(dog1);
// console.log('cat1:', cat1);
// console.log('cat2:', cat2);

//10.


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.candrive = () => this.age >= 18;
}

let person1 = new Person("Jack", 19);
let person2 = new Person("Susan", 15);


function PersonClass(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.candrive = () => this.age >= 18;
}

let person3 = new PersonClass ("Sam", "10");

console.log(person1.name, person1.age);
console.log(person2.name, person2.age);
console.log(person3.name, person3.age);


console.log(person1.candrive());
console.log(person2.candrive());
console.log(person3.candrive());

