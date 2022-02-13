// solution 1
// filter -> O(N)
// includes -> O(N)
// Total -> O(N - Square)
const intersection = (nums1, nums2) => {
  if (!nums1.length || !nums2.length) {
    return false;
  }

  const smallArr = nums1.length < nums2.length ? nums1 : nums2;
  const bigArr = nums1.length > nums2.length ? nums1 : nums2;

  const intersectionArr = smallArr.filter((num) => {
    return bigArr.includes(num);
  });

  return intersectionArr;
};

// solution 2
const intersection2 = (nums1, nums2) => {
  if (!nums1.length || !nums2.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      // they are equal
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};

console.log(intersection([4, 9, 5, 8], [9, 4, 9, 8, 4]));
console.log(intersection2([4, 9, 5, 8], [9, 4, 9, 8, 4]));
