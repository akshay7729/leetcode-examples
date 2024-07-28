const twoSum = (nums, target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
    console.log("numMap", numMap);
  }
  return null;
};

const nums = [12, 11, 3, 6];

// console.log(twoSum(nums, 9));
console.log(twoSum([3, 2, 4], 6));

const twoSum2 = (nums, target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const otherNum = target - nums[i];

    if (numMap.hasOwnProperty(otherNum)) {
      return [numMap[otherNum], i];
    }
    numMap[nums[i]] = i;
    return null;
  }
};
