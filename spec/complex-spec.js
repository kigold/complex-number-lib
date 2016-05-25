var Complex = require("../complex");

describe("Complex", function () {
  it("should add 4 + 5", function () {
    var number = Complex.Complex(4, 5);
    expect(number).toBe(9);
  });
});