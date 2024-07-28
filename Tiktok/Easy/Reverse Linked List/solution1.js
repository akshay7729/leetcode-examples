function reverseLinkedList(head) {
  let prev = null;
  let next = null;
  let current = head;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

// 1 -> 2 -> 3 -> null
// null <- 1 <- 2 <- 3
