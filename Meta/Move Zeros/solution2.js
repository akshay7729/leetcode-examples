// O(n)
// but will create a new array so not a solution

const moveZeros = (nums) => {
  const zeros = [];
  const filterZeros = nums.filter((num) => {
    if (num === 0) {
      zeros.push(num);
    }
    return num !== 0;
  });

  return [...filterZeros, ...zeros];
};

console.log(moveZeros([0, 1, 0, 3, 12]));
