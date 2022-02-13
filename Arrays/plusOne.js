const plusOne = (digits) => {
  if (!digits) {
    return false;
  }

  const getNumber = parseInt(digits.join(""));
  const newNo = getNumber + 1;
  const newNoString = newNo.toString();
  return newNoString.split("");
};

console.log(plusOne([1, 2, 4]));
