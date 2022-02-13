// [[1,2,3],[4,5,6],[7,8,9]]
// output - [[7,4,1],[8,5,2],[9,6,3]]

// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

const rotate = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(arr[j][i]);
    }
    result.push(temp.reverse());
  }
  return result;
};

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
