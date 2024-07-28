const mySqrt = (x) => {
  const calcSqrt = Math.sqrt(x);
  const convertToStrong = calcSqrt.toString();
  return parseInt(convertToStrong.split(".")[0]);
};

console.log(mySqrt(8));
