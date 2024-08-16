function Hello () {

    let text1 = "Hello";
    let text2 = "world!";
    let result = text1.concat(" ", text2);

    return result;
}

console.log(Hello());


function Hello2(anyone) {
  let text1 = "Hello";
  let result = text1.concat(" ", anyone);

  return result;
}

console.log(Hello2("Melody"));