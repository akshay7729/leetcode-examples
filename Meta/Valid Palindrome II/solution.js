const validPalindromeII = (s) => {
  let left = 0;
  let right = s.length - 1;

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      // remove either left or right caracter
      // e.g in abca, remove either b or c
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

console.log(validPalindromeII("abca"));

// check left and right counter
// add to left counter
// decrease from right counter
