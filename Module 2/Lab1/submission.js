function submitform(e) {
  e.preventDefault();

  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("sname").value);
  // console.log(document.getElementByid("radioclick").value);
  // console.log(document.getElementById("checkbox").value);
  // console.log(document.getElementById("cars").value);
}

function radioclick(radio) {
  console.log(`Selected value: ${radio.value}`);
}
