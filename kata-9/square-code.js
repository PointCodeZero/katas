var prompt = require("prompt-sync")();

var message = prompt("Right your secret message: ");

message = message.replace(/ /gi, '');

while(message.length > 81) {
  message = prompt("The secret message must be less or equal to 81 characters (excluding spaces)! Try new message: ");
  message = message.replace(/ /gi, '');
}

console.log(secretArr(message));

function secretArr(input) {
  var output = "Your secret message is: ";
  var secret = createArr(input);
  for (var i = 0; i < column(input); i++) {
    for (var j = 0; j <= row(input); j++) {
      if (typeof secret[j] !== 'undefined' && typeof secret[j][i] !== 'undefined') {
        output = output.concat(secret[j][i]);
      } else {
        break;
      }
    }
    output = output + " ";
  }
  return output;
}

function createArr(input) {
  var arr = [];
  var l = column(input);
  for (var i = 0; i < input.length; i += column(input)) {
    arr.push(input.slice(i, l));
    l += column(input);
  }
  return arr;
}

function row(input) {
  return Math.floor(Math.sqrt(input.length));
}

function column(input) {
  return Math.ceil(Math.sqrt(input.length));
}






