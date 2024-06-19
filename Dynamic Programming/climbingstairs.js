// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbingSteps = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbingSteps(n - 1) + climbingSteps(n - 2);
};

console.log(climbingSteps(4));

// 0 1 2 3 4
// 0 2 4
// 0 1 3 4
// 0 1 2 4
// 0 2 3 4
