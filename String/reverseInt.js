const reverse = (num) => {
  let toString = num.toString();
  let reverse = toString.split("").reverse().join("");
  return parseInt(reverse);
};

console.log(reverse(123));
