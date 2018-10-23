var multiplicationTable = function(maxValue) {
  var table = "";
  for (var x = 1; x <= maxValue; x++) {
    table += "\n" + splitRow(maxValue) + "\n";
    for (var y = 1; y <= maxValue; y++) {
      table += addLeftSpace(y) + x * y.toString() + addRightSpace(x, y);
    }
    table += "\n";
  }
  return table + "\n" + splitRow(maxValue);
};

var splitRow = function(n) {
  var sep = "";
  for (var i = 1; i <= n; i++) {
    if (i !== n) {
      sep += "+-----";
    } else {
      sep += "+-----+";
    }
  }
  return sep + "\n";
};

var addLeftSpace = function(y) {
  if(y === 1) {
    return "| ";
  } else {
    return "";
  }
};

var addRightSpace = function (x, y) {
  var n = x * y;
  if (n.toString().length === 1) {
    return "   | ";
  } else if(n.toString().length === 2) {
    return "  | ";
  } else {
    return " | ";
  }
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));