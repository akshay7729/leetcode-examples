// time complexity 0(n2)
const moveZeros = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 0, 0, 1, 2, 0, 1, 2, 0, 12]));
