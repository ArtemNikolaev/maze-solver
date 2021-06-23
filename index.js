const preparation = require("./src/preparation");
const rawEscape = require("./src/rawEscape");
const preparedEscape = require("./src/preparedEscape");

module.exports = function mazeSolver(maze) {
  const { startPoint, exits } = preparation(maze);
  if (!startPoint || !exits.length) return [];

  const rawWay = rawEscape(
    maze,
    Object.create(startPoint),
    Object.create(exits)
  );

  return preparedEscape(rawWay);
};
