// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses
// have security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Thinking - Should I jump 2 steps or 3 steps backwards to check if I have the most money

const rob = (nums) => {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 3] || 0 + nums[i]);
  }

  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

console.log(houseRobber([2, 7, 9, 3, 1]));
