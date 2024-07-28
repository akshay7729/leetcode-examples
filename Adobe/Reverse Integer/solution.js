const reverse = (x) => {
  const comvertNumToString = `${x}`;
  const numArray = comvertNumToString.split("");
  let isNegativeVal = false;
  if (numArray[0] === "-") {
    isNegativeVal = true;
  }
  const reverseString = numArray.reverse().join("");
  const reverseInt = parseInt(reverseString);

  const MIN_INT = -Math.pow(2, 31);
  const MAX_INT = Math.pow(2, 31) - 1;

  if (reverseInt < MIN_INT || reverseInt > MAX_INT) {
    return 0;
  }

  if (isNegativeVal) {
    return -Math.abs(reverseInt);
  } else {
    return reverseInt;
  }
};

console.log(reverse(1534236469));
