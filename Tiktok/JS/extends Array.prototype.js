Array.prototype.average = function () {
  if (this.length === 0) {
    return 0;
  }

  const sum = this.reduce((acc, value) => acc + value, 0);
  return sum / this.length;
};

const numbers = [1, 2, 3, 4, 5];
console.log("avg", numbers.average());
