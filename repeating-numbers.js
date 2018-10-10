var repeatNumbers = function(data) {
  var result = [];
  if (data.length > 1) {
    var count = 0;
    var num = [];
    while(count < data.length) {
      for (var i = 0; i < data[count][1]; i++) {
        num += data[count][0].toString();
      }
      if(count < data.length -1) {
        num += ", ";
      }
      count++;
    }
    result = num;
  } else {
    for(var i = 0; i < data[0][1]; i++){
      result += data[0][0].toString();
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));