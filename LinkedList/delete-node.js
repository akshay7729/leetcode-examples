// [4,5,1,9]
// remove 5
// out put -> [4,1,9]

const deleteNode = (node) => {
  if (node === null || node.next === null) {
    return null;
  }

  node.val = node.next.val;
  node.next = node.next.next;
};
