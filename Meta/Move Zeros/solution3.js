// O(N)
// increase the counter of non zeros element
// and then after the counter in the second loop replace the elements with zero

const moveZeros = (nums) => {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
