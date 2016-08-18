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
  numberArray.forEach(function(element, index){
    numberArray[index] = parseInt(element);
  });
  for(;numberArray.length < 4;){
    numberArray.unshift(0);
  }

  return numberArray;
}

// UI Logic
$(document).ready(function() {
     $("#salad").prepend("<h1>This is a header</h1>");
});
