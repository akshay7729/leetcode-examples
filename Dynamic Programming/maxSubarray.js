// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

const maxSubarray = (arr) => {
  let currentSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum);
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
