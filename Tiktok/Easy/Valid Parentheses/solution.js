const isValid = (s) => {
  let stack = [];
  const matchingParenthesis = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== matchingParenthesis[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
// console.log(isValid("()"));
// console.log(isValid("(]"));
// console.log(isValid("})[]{}"));
