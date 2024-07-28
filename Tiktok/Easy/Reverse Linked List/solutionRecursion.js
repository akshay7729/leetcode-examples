function reverseLinkedListRecursion(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseLinkedListRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

function reverseLinkedListRecursion2(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseLinkedListRecursion(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
