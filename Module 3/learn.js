// let helloText = "say Hi";

// let check = 4;

// if (check > 3) {
//   let hello = "say Hello instead";

//   console.log(hello); // "say Hello instead"
// }

// console.log(hello); // hello is not defined

// let emptyScores = new Array("A+", 95, "C-", 55, 83, 71, "B+");
// console.log(emptyScores);

// let scores = ["A+", 95, "C-", 55, 83, 71, "B+"];
// console.log(scores);

// const bigint_invalid = 1234567890123456789012345n;
// const bigint_valid = 1234567890123456789012345n;

// console.log(bigint_valid == bigint_invalid);

// console.log("hello" ? "hello is true" : "hello is false");

// if ("hello") {
//   console.log("hello is true");
// } else {
//   console.log("hello is false");
// }

// sayHiExpression(); // error - cannot access before initialization
// sayHiDeclaration(); // works - can be hoisted const sayHiExpression = function() { console.log('Hi') } function sayHiDeclaration() { console.log('Hi') }

// sayHiDeclaration();

// const sayHiExpression = function() {
//     console.log('Hi')
// }

// function sayHiDeclaration() {
//     console.log('Hi')
// }

// sayHiExpression();

// const sayHiArrow = () => console.log('Hi')

// sayHiArrow();

// const subtract1 = (a, b) => a - b;
// const subtract2 = (a, b) => { return a - b };

// console.log(subtract1(1,2));
// console.log(subtract2(2,3));

// const object = {
//     // 2: 'value of numeric property',
//     '2': 'value of string property'
//     }
//     console.log(object);

// let goal = 5;
// for (let i = 1; i < goal; i++) {
// console.log(`Iteration ${i} of ${goal}`)
// }

// const phone = {
//     model: 'iPhone 11',
//     colour: 'black',
//     storage: 64
//     }
//     for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
//     console.log('key: ' + key); // prints each object property name (key) in turn
//     console.log('value: ' + phone[key]); // prints each object value in turn
//     }

// let person1 = { name: 'Anna' };
// let person2 = person1;
// person1.name = 'Brian';
// console.log(person2.name);

// let person3 = 'Carly';
// let person4 = person3;
// person3 = 'David';
// console.log(person4);
// console.log(person3);

// function User(first, last) {
//   this.first = first;
//   this.last = last;
//   this.hasShortName = (firstname) => {
//     console.log(firstname);
//     return this.first.length <= 3;
//   };
// }

// let user1 = new User("Tim", "Smith");
// console.log(user1);
// console.log(user1.hasShortName("MElody"));

// function aFunc() {}

// const bFunc = () => {
//   console.log("b func");
// };

// console.log("adfajgkl", user1.hasShortName.name);

// bFunc();

// class User {
//     constructor(first, last) {
//     this.first = first;
//     this.last = last;
//     }
//     hasShortName() {
//     return this.first.length >= 3
//     }
//     }
//     let user2 = new User('Ti', 'Smith') // need to use 'new'
//     console.log(user2) // User { first: 'Tina', last: 'Smith' }
//     console.log(user2.hasShortName()) // false