function submitform(e) {
  e.preventDefault();

  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("sname").value);
  console.log(document.querySelector('input[name="JavaScript"]:checked').value);
  let car = []
  document.querySelectorAll('input[name="checkbox"]:checked').forEach((e,i)=>{
      car.push(e.value)
  })
  console.log(car.join(", "), car);
  
}

// function radioclick(radio) {
//   console.log(`Selected value: ${radio.value}`);
// }
