const longestCommonPrefix = (arr) => {
  let longestPrefix = "";

  if (!arr) {
    return longestPrefix;
  }

  //first find the min val
  let minVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < minVal.length) {
      minVal = arr[i];
    }
  }

  for (let i = 0; i < minVal.length; i++) {
    let current = arr[0];

    console.log("c", current);
  }

  console.log(minVal);
};

longestCommonPrefix(["flower", "flow", "flight"]);
