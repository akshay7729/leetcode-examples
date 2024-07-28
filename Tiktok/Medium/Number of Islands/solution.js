const numIsIlands = (grid) => {
  let numOfIslands = 0;

  if (grid.length === 0 || grid === null) {
    return 0;
  }

  const dfs = (grid, i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i > grid.length ||
      j > grid[0].length ||
      grid[i][j] === 0
    ) {
      return;
    }

    grid[i][j] === 0; // mark as visited

    // visit all islands
    dfs[i + 1][j];
    dfs[i][j + 1];
    dfs[i - 1][j];
    dfs[i][j - 1];
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numIsIlands++;
        dfs(grid, i, j);
      }
    }
  }
};

console.log(
  numIsIlands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
