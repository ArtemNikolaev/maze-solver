function step(maze, startPoint, path) {
  const result = [];

  const lastMove = path[path.length - 1];
  const previousMove = path[path.length - 2]
    ? path[path.length - 2]
    : { i: undefined, j: undefined };

  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (Math.abs(i + j) !== 1) continue;

      const tr = lastMove.i + i;
      const td = lastMove.j + j;

      if (
        (tr === previousMove.i && td === previousMove.j) ||
        tr < 0 ||
        td < 0 ||
        tr > maze.length - 1 ||
        td > maze[tr].length - 1
      ) {
        continue;
      }

      if (
        maze[tr][td] === "+" ||
        (tr === startPoint.i && td === startPoint.j)
      ) {
        result.push([...path, { i: tr, j: td }]);
      }
    }
  }

  return result;
}

module.exports = (maze, startPoint, exits) => {
  const result = [];

  let ways = exits.map((exit) => [exit]);

  while (!result.length) {
    if (!ways.length) break;

    const path = ways.shift();
    const newWays = step(maze, startPoint, path);

    newWays.forEach((way) => {
      const lastPoint = way[way.length - 1];

      if (lastPoint.i === startPoint.i && lastPoint.j === startPoint.j) {
        result.push(...way);
      }
    });

    ways = [...ways, ...newWays];
  }

  return result.reverse();
};
