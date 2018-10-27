var makeCase = function(input, style) {
  if (typeof style === "string") {
    return cases(input, style);
  } else {
    return arrCases(input, style);
  }
};

var cases = function(input, style) {
  switch (style) {
    case "camel": return camelCase(input);
    case "pascal": return pascalCase(input);
    case "snake": return snakeCase(input);
    case "kebab": return kebabCase(input);
    case "title": return titleCase(input);
    case "vowel": return vowelCase(input);
    case "consonant": return consonantCase(input);
    case "upper": return upperCase(input);
    case "lower": return lowerCase(input);
  }
};

var arrCases = function(input, style) {
  for (var i = 0; i < style.length; i++) {
    switch (style[i]) {
      case "camel": input = camelCase(input); break;
      case "pascal": input = pascalCase(input); break;
      case "snake": input = snakeCase(input); break;
      case "kebab": input = kebabCase(input); break;
      case "title": input = titleCase(input); break;
      case "vowel": input = vowelCase(input); break;
      case "consonant": input = consonantCase(input); break;
      case "upper": input = upperCase(input); break;
      case "lower": input = lowerCase(input); break;
    }
  }
  return input;
};

var camelCase = function(input) {
  input = input.split(' ');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }
  var str = input.join('');
  return str.charAt(0).toLowerCase() + str.slice(1);
};

var pascalCase = function(input) {
  input = input.split(' ');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }
  return input.join('');
};

var snakeCase = function(input) {
  input = input.split(' ');
  return input.join('_');
};

var kebabCase = function(input) {
  input = input.split(' ');
  return input.join('-');
};

var titleCase = function(input) {
  input = input.split(' ');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }
  return input.join(' ');
};

var vowelCase = function(input) {
  input = input.replace(/i/gi, 'I');
  return input.replace(/a/gi, "A");
};

var consonantCase = function(input) {
  input = input.toUpperCase();
  input = input.replace(/I/gi, "i");
  return input.replace(/A/gi, "a");
};

var upperCase = function(input) {
  input = input.toUpperCase();
  return input;
};

var lowerCase = function(input) {
  input = input.toLowerCase();
  return input;
};

console.log(makeCase("this is a string", "camel")); // "thisIsAString"
console.log(makeCase("this is a string", "pascal")); // "ThisIsAString"
console.log(makeCase("this is a string", "snake")); //"this_is_a_string";
console.log(makeCase("this is a string", "kebab")); //"this-is-a-string";
console.log(makeCase("this is a string", "title")); //"This Is A String";
console.log(makeCase("this is a string", "vowel")); //"thIs Is A strIng";
console.log(makeCase("this is a string", "consonant")); //"THiS iS a STRiNG";
console.log(makeCase("this is a string", "upper")); //"THIS IS A STRING";
console.log(makeCase("this is a string", "lower")); //"this is a string";
console.log(makeCase("this is a string", ["upper", "snake"])); //=== "THIS_IS_A_STRING";