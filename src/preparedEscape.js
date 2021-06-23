module.exports = (path) => {
  const result = [];

  for (let i = 1; i < path.length; i += 1) {
    const currentMove = path[i];
    const previousMove = path[i - 1];

    switch (true) {
      case currentMove.i === previousMove.i:
        currentMove.j < previousMove.j
          ? result.push("left")
          : result.push("right");
        break;
      case currentMove.j === previousMove.j:
        currentMove.i < previousMove.i
          ? result.push("top")
          : result.push("bottom");
        break;
    }
  }

  return result;
};
