const { expect } = require("chai");
const { totalValues, tallyIntoObject } = require("../reduce");

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
  it.skip("returns a tally of number of occurences of each key", () => {
    const expected = { Llama: 2, Alpaca: 2, Sheep: 1, Camel: 1 };
    expect(actual).to.eql(expected);
  });
});
