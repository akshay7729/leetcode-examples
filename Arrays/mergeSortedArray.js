// Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
// Output: [1, 2, 2, 3, 5, 6];

const mergeSortedArray = (nums1, m, nums2, n) => {
  const sliceNum1 = nums1.splice(0, m);
  const sliceNum2 = nums2.splice(0, n);

  const arr = [...sliceNum1, ...sliceNum2];
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr;
};

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
