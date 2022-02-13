const singleNum = (nums) => {
  if (nums) {
    for (let i = 0; i < nums.length; i++) {
      const count = nums.filter((num) => num === nums[i]);
      if (count.length === 1) {
        return count[0];
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

console.log(singleNum([1, 1, 3, 3, 2]));
