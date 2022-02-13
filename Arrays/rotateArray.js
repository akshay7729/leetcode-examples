// rotate array by k nums
// nums = [1,2,3,4,5,6,7], k = 3

// solution 1
const rotateArr = (nums, k) => {
  return [...nums.slice(k + 1), ...nums.splice(0, k + 1)];
};

// solution 2
const rotateArr2 = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArr2([1, 2, 3, 4, 5, 6, 7], 3));
