function displayA() {
  console.log('A');
}

function displayB() {
  setInterval(() => console.log('B'), 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
