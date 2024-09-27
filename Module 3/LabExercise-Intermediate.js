const { match } = require("assert");

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

// 3.

// const animals = ['Tiger', 'Giraffe'];


// // a. 
// animals.push("Pig", "Goat");
// // console.log(animals)

// // b.
// animals.unshift("Horse","Hippo");
// // console.log(animals);

// // c.
// animals.sort ();
// // console.log(animals);

// // d.
// function replaceMiddleAnimal(arr, newValue) {
//   if (arr.length === 0) {
//     throw new Error}
//     return (animals);
//   };

// console.log(replaceMiddleAnimal(animals, newValue = "Penguin"));

// // e.

// function findMatchingAnimals(animals, beginsWith) {
//   const lowerCaseBeginsWith = beginsWith.toLowerCase();

//   return animals.filter((animal) =>
//     animal.toLowerCase().startsWith(lowerCaseBeginsWith)
//   );
// }

// const matchingAnimals = findMatchingAnimals (animals, "H");

// console.log(matchingAnimals);

4.
//a.
function camelCase(cssProp) {
    return cssProp
        .split('-') 
        .map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
      }

//b.1.1

function camelCaseForLoop(cssProp) {
  const words = cssProp.split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  return result;
}

//b.1.2

function camelCaseForOfLoop(cssProp) {
  const words = cssProp.split("-");
  let result = "";

  let firstWord = true;
  for (const word of words) {
    if (firstWord) {
      result += word;
      firstWord = false;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return result;
}

//b.1.3

function camelCaseForEach(cssProp) {
  const words = cssProp.split("-");
  let result = "";

  words.forEach((word, index) => {
    if (index === 0) {
      result += word; // First word remains lowercase
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  return result;
}