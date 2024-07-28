function myPromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    const numOfPromises = iterable.length;

    if (numOfPromises === 0) {
      return resolve(results);
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          resolved += 1;

          if (resolved === numOfPromises) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve, 500, "p3");
});

myPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log("values", values);
  })
  .catch((error) => console.log("error", error));
