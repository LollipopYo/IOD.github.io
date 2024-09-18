1.

// function capitalizeWords(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' '); 
// }

// const testStr = [
//     "hello",
//     "people",
//     "each word",
//     "los angeles",

// ];

// testStr.forEach(test=>
// {
//     console.log(`${capitalizeWords(test)}`);
// });

2.

// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max - 3) + '...';
//     } else {
//         return str;
//     }
// }

// console.log(truncate('This text will be truncated if it is too long', 25));

// function truncate(str, max) {
//     return str.length > max ? str.slice(0, max - 3) + '...' : str;
// }

// console.log(truncate('This text will be truncated if it is too long', 25));

3.

const animals = ['Tiger', 'Giraffe'];


// a. 
animals.push("Pig", "Goat");
// console.log(animals)

// b.
animals.unshift("Horse","Hippo");
// console.log(animals);

// c.
animals.sort ();
// console.log(animals);

// d.
function replaceMiddleAnimal(arr, newValue) {
  if (arr.length === 0) {
    throw new Error}
    return (animals);
  };

console.log(replaceMiddleAnimal(animals, newValue = "Penguin"));











