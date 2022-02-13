// [0,0,1,1,1,2,2,3,3,4]

// solution 1
// set -> O(1)
// spread operator -> O(N)
// Total -> O(N)
const removeDuplicates1 = (arr) => {
  return [...new Set(arr)];
};

// solution 2
// for array -> O(N)
// includes -> O(N)
// Total -> O(N) * O(N) = O(N - Square)
const removeDuplicates2 = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

// solution 3
// filter -> O(N)
// indexOf -> O(N)
// Total -> O(N)* O(N) = O(N - Square)
const removeDuplicates3 = (arr) => {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });
};

console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
