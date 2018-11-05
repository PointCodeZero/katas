var whiteQueen = [2, 4];
var blackQueen = [4, 2];

console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat(whiteQueen, blackQueen));

function dimensionBoard() {
  var board = [];
  var arr = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      arr.push(0);
    }
    board.push(arr);
    arr = [];
  }
  return board;
}

function generateBoard(w, b) {
  var queenBoard = dimensionBoard();
  queenBoard[w[0]][w[1]] = 1;
  queenBoard[b[0]][b[1]] = 1;
  return queenBoard;
}

function queenThreat(w, b) {
  if (w[0] === b[0] || w[1] === b[1]) {
      return "Queen threat: " + true + "!";
  } else if (w[0] + w[1] === b[0] + b[1]) {
      return "Queen threat: " + true + "!";
  } else if (w[1] - w[0] === b[1] - b[0]) {
      return "Queen threat: " + true + "!";
  } else {
      return "Queen threat: "  + false + "!";
  }
}



