var calculateChange = function(total, cash) {
  var changeBack = {};
  var change = cash - total;
  var changeText = ['twenty', 'ten', 'five', 'twoDollar', 'dollar', 'quarter', 'dime', 'nickel', 'penny'];
  var money = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  for (var i = 0; i < money.length; i++) {
    if (change >= money[i]) {
      changeBack[changeText[i]] = Math.ceil(money[i]/cash) * Math.floor(change/money[i]);
      change -= money[i] * Math.floor(change/money[i]);
    }
  }
  return changeBack;
};

console.log(calculateChange(1787, 2000));  //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));  //{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));   //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }