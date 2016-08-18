// Business Logic
var romanNums = ["M","D", "C", "L", "X", "V", "I"];

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
  numberArray.forEach(function(element, index){
    numberArray[index] = parseInt(element);
  });

  for(;numberArray.length < 4;){
    numberArray.unshift(0);
  }
  return numberArray;
}

function fiver(array) {
  for (i=1; i<array.length; i+=2) {
    if (array[i] >= 5) {
      array[i] = array[i] - 5;
      array.splice(i, 0, 1);
    } else {
      array.splice(i, 0, 0);
    }
  }
  return array;
}

// UI Logic
$(document).ready(function() {
     $("#salad").prepend("<h1>This is a header</h1>");
});
