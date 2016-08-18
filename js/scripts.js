// Business Logic
function isValid(input) {
  if (isNaN(input) === true || input <= 0 || input >= 4000 || input !== Math.floor(input)) {
    alert("Please enter a whole number between 1 and 3,999");
    return false;
  } else {
  return true;
  }
}

function separator(number) {
  var numberArray = number.split("");

  if (numberArray.length === 1) {
    numberArray[3] = parseInt(numberArray[0]);
    numberArray[2] = 0;
    numberArray[1] = 0;
    numberArray[0] = 0;
  } else if (numberArray.length === 2) {
      numberArray[3] = parseInt(numberArray[1]);
      numberArray[2] = parseInt(numberArray[0]) * 10;
      numberArray[1] = 0;
      numberArray[0] = 0;
  } else if (numberArray.length === 3) {
      numberArray[3] = parseInt(numberArray[2]);
      numberArray[2] = parseInt(numberArray[1]) * 10;
      numberArray[1] = parseInt(numberArray[0]) * 100;
      numberArray[0] = 0;
  } else if (numberArray.length === 4) {
      numberArray[0] = parseInt(numberArray[0]) * 1000;
      numberArray[1] = parseInt(numberArray[1]) * 100;
      numberArray[2] = parseInt(numberArray[2]) * 10;
      numberArray[3] = parseInt(numberArray[3]);
  }
  return numberArray;
}

// UI Logic
$(document).ready(function() {
     $("#salad").prepend("<h1>This is a header</h1>");
});
