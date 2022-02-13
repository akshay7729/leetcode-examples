const moveZeros = (nums) => {
  let zerosArr = [];
  const arr = nums.filter((num) => {
    if (num === 0) {
      zerosArr.push(num);
    }
    return num !== 0;
  });
  return [...arr, ...zerosArr];
};

console.log(moveZeros([0, 1, 0, 3, 12]));
