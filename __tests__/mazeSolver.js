const mazeSolver = require("../index");

const testCases = [
  require("./mazeCases/noStartPosition.json"),
  require("./mazeCases/noEscape.json"),
  require("./mazeCases/falsy.json"),
  require("./mazeCases/left.json"),
  require("./mazeCases/twoExitsWithfalsy.json"),
  require("./mazeCases/top-left.json"),
  require("./mazeCases/top-right.json"),
  require("./mazeCases/right.json"),
  require("./mazeCases/bottom.json"),
];

describe("Функция должна показать решение когда", () => {
  testCases.forEach((testCase) => {
    it(testCase.name, () => {
      expect(mazeSolver(testCase.maze)).toEqual(testCase.result);
    });
  });
});
