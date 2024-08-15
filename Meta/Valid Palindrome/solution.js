const isPalindrome = (s) => {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(
    "cleanString",
    cleanString,
    cleanString.split("").reverse().join("")
  );
  return cleanString === cleanString.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
