// Business Logic
var romanNums = ["M","D", "C", "L", "X", "V", "I"];

function isValid(input) {
  var test = parseFloat(input);
  if (isNaN(test) === true || test <= 0 || test >= 4000 || input.match(/.*(\.|,).*/) !== null) {
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

function toRoman(array) {
  array.forEach(function(element, index){
    var tempArray = [index, element]
    array[index] = tempArray;
  });
  return array;
}

function cleanFours(array){
  for(i=array.length - 1; i > 0; i--) {
    if (array[i][1] === 4 && array[i-1][1] === 0){
      array[i][1]=1;
      array.splice(i + 1, 0, [array[i][0]-1, 1]);
    } else if (array[i][1] === 4 && array[i-1][1] === 1){
      array[i][1] = 1;
      array[i-1][1] = 0;
      array.splice(i+1, 0, [array[i][0]-2, 1]);
    }
  }
  return array;
}

function toLetters(array){
  var output = "";
  array.forEach(function(element, index){
    for (i = array[index][1]; i > 0; i--){
      output = output + romanNums[array[index][0]];
    }
  });
  return output;
}
// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var number = $("input#number").val();
    if (isValid(number)) {
      number = separator(number);
      var roman = toLetters(cleanFours(toRoman(fiver(number))));
      $("#result").text(roman);
    } else {
      alert("Please enter a whole number between 1 and 3999 without any commas or decimal points");
    }
    event.preventDefault();
  });
});
