const { expect } = require("chai");
const {
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
} = require("../recursion");

describe.only("getFactorial", () => {
  it("returns a number", () => {
    const actual = getFactorial(5);
    expect(actual).to.be.a("number");
  });
  it("returns the factorial", () => {
    const actual = getFactorial(5);
    const expected = 120;
    expect(actual).to.equal(expected);
  });
});

describe.only("sum()", () => {
  it("returns a number", () => {
    const actual = sum(5);
    expect(actual).to.be.a("number");
  });
  it("returns the sum of the integers 1 through n", () => {
    const actual = sum(4);
    const expected = 10;
    expect(actual).to.equal(expected);
  });
});

describe.only("whiteSpace", () => {
  it("returns a number", () => {
    const actual = whiteSpace("");
    expect(actual).to.be.a("number");
  });
  it("returns a count of whitespaces present in string", () => {
    const actual = whiteSpace("Hello World");
    const expected = 1;
    expect(actual).to.equal(expected);
  });
});

describe.only("isPalindrome", () => {
  it("returns a boolean", () => {
    const actual = isPalindrome("");
    expect(actual).to.be.a("boolean");
  });
  it("correctly identifies whether a string is a palindrome", () => {
    const actuallyFalse = isPalindrome("world");
    const actuallyTrue = isPalindrome("kayak");
    expect(actuallyFalse).to.be.false;
    expect(actuallyTrue).to.be.true;
  });
});

describe.only("sumUntilOneDig", () => {
  it("returns a number", () => {
    const actual = sumUntilOneDig(10);
    expect(actual).to.be.a("number");
  });
  it("sums digits until only one digit remains - one round", () => {
    const actualTwoDig = sumUntilOneDig(12);
    const expectedTwoDig = 3;
    const actualThreeDig = sumUntilOneDig(123);
    const expectedThreeDig = 6;
    expect(actualTwoDig).to.equal(expectedTwoDig);
    expect(actualThreeDig).to.equal(expectedThreeDig);
  });
  it("sums digits until only one digit remains - more than one round", () => {
    const actual = sumUntilOneDig(99);
    const expected = 9;
    expect(actual).to.equal(expected);
  });
});

describe("reversedString", () => {
  it("returns a string", () => {
    const actual = reversedString("");
    expect(actual).to.be.a("string");
  });
  it("reverses a string", () => {
    const actual = reversedString("Hello");
    const expected = "olleH";
    expect(actual).to.equal(expected);
  });
});

describe("countZeros", () => {
  it("returns a number", () => {
    const actual = countZeros("");
    expect(actual).to.be.a("number");
  });
  it("counts the number of zeros in an array of numbers", () => {
    const input = [0, 100, 9, 5];
    const actual = countZeros(input);
    const expected = 3;
    expect(actual).to.equal(expected);
  });
});

describe("max", () => {
  it("returns a number", () => {
    const actual = max([1, 2, 3]);
    expect(actual).to.be.a("number");
  });
  it("returns the biggest number in the array", () => {
    const array = [3, 10, 9, 50];
    const actual = max(array);
    const expected = 50;
    expect(actual).to.equal(expected);
  });
  it("can sort arrays when there are duplicate numbers", () => {
    const array = [10, 3, 3, 5, 10, 2];
    const actual = max(array);
    const expected = 10;
    expect(actual).to.equal(expected);
  });
});

describe("fibonacciSeq", () => {
  it("returns a number", () => {
    const actual = fibonacciSeq(2);
    expect(actual).to.be.a("number");
  });
  it("returns the 7th correct fibonnaci number", () => {
    const actual = fibonacciSeq(7);
    const expected = 8;
    expect(actual).to.equal(expected);
  });
  it("returns the 6th correct fibonnaci number", () => {
    const actual = fibonacciSeq(6);
    const expected = 5;
    expect(actual).to.equal(expected);
  });
  it("returns the 1st correct fibonnaci number", () => {
    const actual = fibonacciSeq(1);
    const expected = 0;
    expect(actual).to.equal(expected);
  });
});

describe("deepFreeze", () => {
  it("returns an object", () => {
    const myObj = {
      animal: "dog",
      name: "Snoopy",
      colour: "white"
    };
    const actual = deepFreeze(myObj);
    expect(actual).to.be.an("object");
  });
  it("returns one frozen object", () => {
    const myObj = {
      animal: "dog",
      name: "Snoopy",
      colour: "white"
    };
    deepFreeze(myObj);
    myObj.food = "kibble";
    const expected = {
      animal: "dog",
      name: "Snoopy",
      colour: "white"
    };
    expect(expected).to.eql(myObj);
  });
  it("returns an object containing frozen objects", () => {
    const myObj = {
      animals: { one: "dog", two: "cat", three: "sheep" },
      furniture: { one: "chair", two: "table", three: "bed" },
      vehicles: { one: "car", two: "train", three: "bicycle" }
    };
    deepFreeze(myObj);
    myObj.animals.four = "cow";
    const expected = {
      animals: { one: "dog", two: "cat", three: "sheep" },
      furniture: { one: "chair", two: "table", three: "bed" },
      vehicles: { one: "car", two: "train", three: "bicycle" }
    };
    expect(expected).to.eql(myObj);
  });
});

describe("jsonStringify", () => {
  // numbers
  it("converts number to string", () => {
    expect(jsonStringify(3)).to.be.a("string");
    expect(jsonStringify(6)).to.equal("6");
  });
  // booleans
  it("converts booleans to strings", () => {
    expect(jsonStringify(true)).to.equal("true");
  });
  // strings
  it("adds an extra set of string markers to strings", () => {
    expect(jsonStringify("cheesecake")).to.equal('"cheesecake"');
  });
  // arrays
  it("converts array into string containing array", () => {
    expect(jsonStringify([])).to.equal("[]");
    const arr = [1, "cheesestring", false];
    const expected = '[1,"cheesestring",false]';
    expect(jsonStringify(arr)).to.equal(expected);
  });
  // objects
  it("converts object into string containing object", () => {
    // expect(jsonStringify({})).to.equal('{}');
    const originalObj = { x: 5, y: 6 };
    const myObj = { x: 5, y: 6 };
    const expected = JSON.stringify(myObj);
    expect(jsonStringify(originalObj)).to.equal(expected);
  });
});
