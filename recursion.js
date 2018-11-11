function getFactorial(num) {
  if (num <= 1) return num;
  return num * getFactorial(num - 1);
}

function sum(num) {
  if (num < 1) return num;
  return num + sum(num - 1);
}

function whiteSpace(str) {
  if (str === "") return 0;
  let count = str.slice(0, 1) === " " ? 1 : 0;
  return count + whiteSpace(str.slice(1));
}

function isPalindrome(str) {
  if (str.length < 3) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

function sumUntilOneDig(num) {
  let result = num
    .toString()
    .split("")
    .reduce((acc, num) => acc + parseInt(num), 0);
  return result < 10 ? result : sumUntilOneDig(result);
}

function reversedString(str) {
  if (str === "") return "";
  return str.slice(-1) + reversedString(str.slice(0, -1));
}

function countZeros() {}

function max() {}

function fibonacciSeq() {}

function deepFreeze() {}

function jsonStringify() {}

module.exports = {
  getFactorial,
  sum,
  whiteSpace,
  isPalindrome,
  sumUntilOneDig,
  reversedString,
  countZeros,
  max,
  fibonacciSeq,
  deepFreeze,
  jsonStringify
};
