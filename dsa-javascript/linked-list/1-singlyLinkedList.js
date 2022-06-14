class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // inserts at the end of the list
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removes the last item from the list
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--
      return this.head;
    }
    let previousNode = this.head,
      currentNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    return currentNode;
  }

  // removes first item from the list
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.head;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  // adds an item at the beginning of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get a item from the index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    let counter = 0;
    let node = this.head;
    while (counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // set value of a node at a particular index
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  // insert in a particular position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    const node = new Node(value);
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const previousNode = this.get(index - 1);
      node.next = previousNode.next;
      previousNode.next = node;
    }
    this.length++;
    return true;
  }

  // remove an item from a particular position
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.shift(value);
    } else if (index === this.length) {
      this.pop(value);
    } else {
      const previousNode = this.get(index - 1);
      previousNode.next = previousNode.next.next;
    }
    this.length--;
    return true;
  }

  // reverses the linked list in place
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let previous = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current
      current = next;
    }
  }
}