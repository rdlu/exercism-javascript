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
    this.head = null;
    this.tail = null;
  }

  push(value) {
    this.tail = new Node(value, null, this.tail);
    this.head ??= this.tail;
    return value;
  }

  unshift(value) {
    this.head = new Node(value, this.head, null);
    this.tail ??= this.head;
    return value;
  }

  pop() {
    const popped = this.tail;
    this.tail = popped?.prev;
    if(!popped.prev) this.head = null;
    return popped?.implode();
  }

  shift() {
    const popped = this.head;
    this.head = popped?.next;
    return popped?.implode();
  }

  count() {
    let count = 0;
    let curNode = this.head;
    while (curNode) {
      curNode = curNode.next;
      count += 1;
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
    if(this.head === node) this.head = node.next;
    if(this.tail === node) this.tail = node.prev;
    return node?.implode();
  }


}
