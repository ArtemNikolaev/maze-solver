module.exports = (maze) => {
  const result = {
    startPoint: undefined,
    exits: [],
  };

  for (let i = 0; i <= maze.length - 1; i++) {
    for (let j = 0; j <= maze[i].length - 1; j++) {
      if (i % (maze.length - 1) === 0 || j % (maze[i].length - 1) === 0) {
        if (maze[i][j] === "+") result.exits.push({ i, j });
      }

      if (maze[i][j] == 0) result.startPoint = { i, j };
    }
  }

  return result;
};
