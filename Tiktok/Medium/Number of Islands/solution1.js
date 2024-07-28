const numOfIslands = (grid) => {
  let numOfIslands = 0;
  // error handling
  if (grid.length === 0 || grid === null) {
    return 0;
  }

  const visitLands = (grid, i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    grid[i][j] = "0"; // mark as visited

    // visit adjacent islands
    visitLands(grid, i + 1, j);
    visitLands(grid, i - 1, j);
    visitLands(grid, i, j + 1);
    visitLands(grid, i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numOfIslands++;
        visitLands(grid, i, j);
      }
    }
  }

  return numOfIslands;
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numOfIslands(grid1)); // Output: 1
