const { expect } = require("chai");
const {
  totalValues,
  tallyIntoObject,
  flattenArray,
  uniqueValues,
  removeDupes
} = require("../reduce");

describe("totalValues", () => {
  it("returns a number", () => {
    const actual = totalValues([0, 1, 2]);
    expect(actual).to.be.a("number");
  });
  it("returns 6 when passed the array [0, 1, 2, 3]", () => {
    expect(totalValues([0, 1, 2, 3])).to.equal(6);
  });
  it("returns 2618 when passed the array [599, 432, 588, 999]", () => {
    expect(totalValues([599, 432, 588, 999])).to.equal(2618);
  });
  it("does not mutate the original array", () => {
    const input = [876, 654, 321, 987];
    totalValues(input);
    expect(input).to.eql([876, 654, 321, 987]);
  });
});

describe("tallyIntoObject", () => {
  let actual;
  beforeEach(() => {
    actual = tallyIntoObject([
      "Llama",
      "Alpaca",
      "Sheep",
      "Alpaca",
      "Llama",
      "Camel"
    ]);
  });
  it("returns an object", () => {
    expect(actual).to.be.an("object");
  });
  it("returns a tally of number of occurences of each key", () => {
    const expected = { Llama: 2, Alpaca: 2, Sheep: 1, Camel: 1 };
    expect(actual).to.eql(expected);
  });
});

describe("flattenArray", () => {
  it("returns an array", () => {
    expect(flattenArray([[1, 2], [3, 4]])).to.be.an("array");
  });
  it("flattens an array of arrays containing numbers into a single array", () => {
    const input = [[0, 1], [2, 3], [4, 5]];
    expect(flattenArray(input)).to.eql([0, 1, 2, 3, 4, 5]);
  });
  it("flattens an array of arrays containing strings into a single array", () => {
    const input = [
      ["hello", "world"],
      ["is", "it me"],
      ["you're", "looking for?"]
    ];
    expect(flattenArray(input)).to.eql([
      "hello",
      "world",
      "is",
      "it me",
      "you're",
      "looking for?"
    ]);
  });
});

describe("uniqueValues", () => {
  it("returns an array", () => {
    const actual = uniqueValues([1, 2, 1, 3, 5, 5, 7]);
    expect(actual).to.be.an("array");
  });
  it("returns an array of the unique numbers from the original array", () => {
    const actual = uniqueValues([1, 2, 1, 3, 5, 5, 7]);
    const expected = [2, 3, 7];
    expect(actual).to.eql(expected);
  });
  it("does not mutate the original array", () => {
    const input = [1, 2, 1, 3, 5, 5, 7];
    uniqueValues(input);
    expect(input).to.eql([1, 2, 1, 3, 5, 5, 7]);
  });
});

describe("removeDupes", () => {
  it("returns an array", () => {
    const actual = removeDupes([1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]);
    expect(actual).to.be.an("array");
  });
  it("returns an array of numbers with duplicates removed", () => {
    const actual = removeDupes([1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).to.be.eql(expected);
  });
  it("returns an array of strings with duplicates removed", () => {
    const input = ["Llama", "Alpaca", "Sheep", "Alpaca", "Llama", "Camel"];
    const expected = ["Alpaca", "Camel", "Llama", "Sheep"];
    expect(removeDupes(input)).to.be.eql(expected);
  });
  it("does not mutate the original array", () => {
    const input = ["Llama", "Alpaca", "Sheep", "Alpaca", "Llama", "Camel"];
    removeDupes(input);
    expect(input).to.be.eql([
      "Llama",
      "Alpaca",
      "Sheep",
      "Alpaca",
      "Llama",
      "Camel"
    ]);
  });
});
