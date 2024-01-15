class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    if(this.prev) this.prev.next = this;
    if(this.next) this.next.prev = this;
  }

  implode() {
    if (this.next) this.next.prev = this.prev;
    if (this.prev) this.prev.next = this.next;
    return this.value;
  }
}

export class LinkedList {
  constructor() {
    this.tail = new Node(null);
    this.head = new Node(null, this.tail);
    this.tail.prev = this.head;
  }

  push(value) {
    this.tail.prev = new Node(value, this.tail, this.tail.prev);
    this.head.next ??= this.tail.prev;
    return value;
  }

  unshift(value) {
    this.head.next = new Node(value, this.head.next, this.head);
    this.tail.prev ??= this.head.next;
    return value;
  }

  pop() {
    return this.tail.prev.implode();
  }

  shift() {
    return this.head.next.implode();
  }

  count() {
    let count = 0;
    let curNode = this.head;
    while (curNode.next !== this.tail) {
      curNode = curNode.next;
      count ++;
    }

    return count;
  }


  find(value) {
    let curNode = this.head;
    while (curNode && curNode.value !== value) {
      curNode = curNode.next;
    }

    return curNode;
  }

  delete(value) {
    const node = this.find(value);
    return node?.implode();
  }
}
