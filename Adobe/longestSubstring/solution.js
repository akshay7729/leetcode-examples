const longestSubstring = (string) => {
  // incorrect solution
  const arrayOfChars = string.split("");
  const resultArray = [];
  for (let char of arrayOfChars) {
    if (!resultArray.includes(char)) {
      resultArray.push(char);
    } else {
      break;
    }
  }
  return resultArray?.join("");
};

// time complexity - O(n2)| worst case - O(n3)
const longestSubstringCorrectSolution = (string) => {
  const arrayOfChars = string.split("");
  let longestSubstringLength = 0;
  let resultArray = [];

  for (let i = 0; i < arrayOfChars.length; i++) {
    resultArray = [];
    for (let j = i; j < arrayOfChars.length; j++) {
      if (!resultArray.includes(arrayOfChars[j])) {
        resultArray.push(arrayOfChars[j]);
      } else {
        break;
      }
    }

    if (resultArray && resultArray?.length > longestSubstringLength) {
      longestSubstringLength = resultArray.length;
    }
  }
  return longestSubstringLength;
};

const longestSubstringWithoutRepeating = (string) => {
  let n = string.length;
  let set = new Set();
  let longestSubstringLength = 0;
  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    if (!set.has(string[j])) {
      set.add(string[j]);
      j++;
      longestSubstringLength = Math.max(longestSubstringLength, j - i);
    } else {
      set.delete(string[i]);
      i++;
    }
  }
  return longestSubstringLength;
};

// j - i  ---> is the window
//   Each time we add a character to the set (meaning it’s not a duplicate),
// we update longestSubstringLength with the maximum of
// its current value or the current window size (j - i).

console.log(longestSubstringWithoutRepeating("pwwkew"));
