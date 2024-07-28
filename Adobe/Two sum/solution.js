const twoSum = (nums, target) => {
  const numMap = {};

  console.log("numMap", numMap);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }
  return null;
};

const nums = [12, 11, 3, 6];

console.log(twoSum(nums, 9));
