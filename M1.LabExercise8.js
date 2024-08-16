function rolldice(max){
return Math.floor(Math.random() * max) + 1;
}
rolldice()

console.log(rolldice(6));

function chooseDice(dice) {
  if (dice == "d6") {
    console.log(rolldice(6));
  } else {
    console.log(rolldice(10));
  }
}

const a = "d10";
chooseDice("d6");
chooseDice();
chooseDice("d10");