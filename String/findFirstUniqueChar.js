const findFirstUniqueChar = (str) => {
  const hash = {};
  for (let char of str) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for (let char in hash) {
    if (hash[char] === 1) {
      return char;
    } else {
      return -1;
    }
  }
};

console.log(findFirstUniqueChar("leetcode"));
