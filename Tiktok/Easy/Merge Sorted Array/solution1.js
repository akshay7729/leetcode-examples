// requirement we need to add to the nums 1

const mergeSortedArray = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
  console.log("nums 1", nums1);
};

// const mergeSortedArray = (nums1, m, nums2, n) => {
//   let i = 0;
//   while (i < nums1.length || i < nums2.length) {
//     console.log(`nums 1: ${nums1[i]} ||||| nums2: ${nums2[i]}`);
//     i++;
//   }
// };

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(mergeSortedArray([0], 0, [1], 1));
// console.log(mergeSortedArray([1], 1, [], 0));
