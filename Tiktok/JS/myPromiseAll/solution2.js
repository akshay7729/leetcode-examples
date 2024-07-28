export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    const resolved = 0;
    const numOfPromises = iterable.length;

    if (numOfPromises === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        resolved++;

        if (resolved === numOfPromises) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}
