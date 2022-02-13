// [7,1,5,3,6,4]

// find the total profit

const buySell = (prices) => {
  if (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i + 1] > prices[i]) {
        profit += prices[i + 1] - prices[i];
      }
    }
    return profit;
  } else {
    return 0;
  }
};

console.log(buySell([7, 1, 5, 3, 6, 4]));
