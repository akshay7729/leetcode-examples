const validSuduko = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // rows
    if (!checkRows(arr[i])) {
      return false;
    }

    // cols
    if (!checkCols(i, arr)) {
      return false;
    }
  }

  for (let k = 0; k < 9; k += 3) {
    if (!checkGrids(k, arr, 0, 3)) {
      return false;
    }
    if (!checkGrids(k, arr, 3, 6)) {
      return false;
    }
    if (!checkGrids(k, arr, 6, 9)) {
      return false;
    }
  }

  return true;
};

const checkRows = (arr) => {
  return checkUnique(arr);
};

const checkCols = (i, arr) => {
  let col = arr[i].map((item, j) => {
    return arr[j][i];
  });
  return checkUnique(col);
};

const checkGrids = (i, arr, loopVar, loopLength) => {
  let square = [];

  for (let j = loopVar; j < loopLength; j++) {
    if (i % 3 === 0 || i === 0) {
      square.push(arr[i][j]);
      if (i + 1 < 9) {
        square.push(arr[i + 1][j]);
      }
      if (i + 2 < 9) {
        square.push(arr[i + 2][j]);
      }
    }
  }

  if (square.length) {
    return checkUnique(square);
  }
};

const checkUnique = (arr) => {
  const onlyNums = arr.filter((num) => num !== ".");
  const unique = [...new Set(onlyNums)];
  if (onlyNums.length !== unique.length) {
    return false;
  } else {
    return true;
  }
};

console.log(
  validSuduko([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
