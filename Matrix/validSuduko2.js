// input
// [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// each rows should contain 1-9 without repetition
// each col should contain 1-9 without repetition
// each grid (3x3) should contain 1-9 without repetition

const validSuduko = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // rows check
    if (!checkRows(arr[i])) {
      return false;
    }

    checkCols(i, arr);
  }
};

// check rows
const checkRows = (row) => {
  const onlyNums = row.filter((num) => num !== ".");
  const unique = [...new Set(onlyNums)];
  if (unique.length !== onlyNums.length) {
    return false;
  } else {
    return true;
  }
};

const checkCols = (i, arr) => {
  let col = arr[i].map((item, j) => {
    return arr[j][i];
  });
  console.log("col", col);
  checkRows();
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
