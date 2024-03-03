import { compose } from "redux";
function removeSpaces(string) {
  return string.split(" ").join("");
}

const r = removeSpaces("vipul 123 4 5 6 7 5 ");
console.log(r);

function repeatString(string) {
  //   return string.repeat(2);
  return string + string;
}
console.log(repeatString("Abcd"));

function ConvertTOUppercase(string) {
  return string.toUpperCase();
}

console.log(ConvertTOUppercase("avbbwo"));
const input = "abs def ghi";
// const output = ConvertTOUppercase(repeatString(removeSpaces(input)));
// console.log(output);

const composeFunction = compose(removeSpaces, repeatString, ConvertTOUppercase);
console.log(composeFunction(input));
