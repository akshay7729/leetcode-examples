class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("1");
const b = new Node("2");
const c = new Node("3");
const d = new Node("4");
const e = new Node("5");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

const removeNode = (head, n) => {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }

  if (n > length) {
    return undefined;
  }

  let target = length - n;
  if (target === 0) {
    return head.val;
  }

  let index = 0;
  let newCurrent = head;
  let targetNode = "";

  while (newCurrent !== null) {
    if (index === target - 1) {
      targetNode = newCurrent.next;
      newCurrent.next = newCurrent.next.next;
    }

    newCurrent = newCurrent.next;
    index++;
  }

  return head;
};

console.log(removeNode(a, 5));
