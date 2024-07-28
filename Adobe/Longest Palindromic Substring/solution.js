const longestPalindromeSubString = (string) => {
  let n = string.length;
  let i = 0;
  let j = 0;
  let longestPalindromeSubstr = "";

  while (i < n && j < n) {
    j++;
    if (string[j]) {
      console.log(j, string[j], string[i]);
    }
  }
};

longestPalindromeSubString("babad");
