// solution 1
const containsDuplicate = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return true;
    } else {
      arr.push(nums[i]);
    }
  }
  if (nums.length === arr.length) {
    return false;
  }
};

// solution 2
const containsDuplicate2 = (nums) => {
  const unique = [...new Set(nums)]; // O(N)
  if (unique.length === nums.length) {
    return false;
  } else {
    return true;
  }
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6]));
console.log(containsDuplicate2([1, 2, 3, 2, 5, 6]));
