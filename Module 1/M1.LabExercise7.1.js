function Hello(anyone) {
  let text1 = "Hello";
  let result = text1.concat(" ", anyone);

  return result;
}

console.log(Hello("Melody"));

  if (Hello("Melody") == "Hello Melody") {
    console.log("something is correct");
  } else {
    console.log("something is wrong");
  }


function Hello2(Hello2) {
    let text2 = "Hello";
    let result1 = text2.concat(" ", Hello2)

return result1;

  }


Hello2("Sam");
Hello2("Ben");
Hello2("John");

console.log(Hello2(" Sam"));
console.log(Hello2(" Ben"));
console.log(Hello2(" John"));

if (Hello2(" Sam") == "Hello Sam") {
  console.log("something is correct");
} else {
  console.log("something is wrong");
}
if (Hello2(" Ben") == "Hello Ben") {
  console.log("something is correct");
} else {
  console.log("something is wrong");
}
if (Hello2(" John") == "Hello John") {
  console.log("something is correct");
} else {
  console.log("something is wrong");
}
