export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(items = []) {
    this._length = 0;
    this._head = null;
    items.forEach(item => this.add(new Element(item)));
  }

  add(nextValue) {
    nextValue._next = this.head;
    this._head = nextValue;
    this._length += 1;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const result = [];
    let current = this._head;
    while (current !== null) {
      result.push(current.value);
      current = current._next;
    }
    return result;
  }

  reverse() {
    let current = this._head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current._next;
      current._next = prev;
      prev = current;
      current = next;
    }

    this._head = prev;
    return this;
  }
}
