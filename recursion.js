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

function isPalindrome() {}

function sumUntilOneDig() {}

function reversedString() {}

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
