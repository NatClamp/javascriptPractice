const { expect } = require("chai");
const { totalValues } = require("../reduce");

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
