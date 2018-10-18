var camelCase = function(input) {
  input = input.split(' ');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }
  str = input.join('');
  return str.charAt(0).toLowerCase() + str.slice(1);
};

console.log(camelCase("this is a string"));  // thisIsAString
console.log(camelCase("loopy lighthouse"));  // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

//=================================================================
//Title Case a Sentence With a FOR Loop

// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// titleCase("I'm a little tea pot");

//=================================================================
//FIRST SOLUTION

// var camelCase = function(input) {
  // var newString = "";
  // var s = input.replace(/\b\w/g, l => l.toUpperCase());
  // var lStr = s[0].toLowerCase() + s.slice(1);
  // var regex = / /gi;
  // for (var i = 0; i < lStr.length; i++) {
  //   if (lStr[i] === ' ') {
  //     newString += lStr[i].replace(regex, '');
  //   } else {
  //     newString += lStr[i];
  //   }
  // }
  // return newString;
// };
