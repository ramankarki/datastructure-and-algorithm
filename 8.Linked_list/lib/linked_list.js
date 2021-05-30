// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToHead method here
  addToHead(value) {
    let newNode = new Node(value);

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

  // TODO: Implement the addToTail method here
  addToTail(value) {
    let newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    return currentHead;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.tail) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let secondLastNode = this.get(this.length - 2);
    let lastNode = this.tail;
    this.tail = secondLastNode;
    this.tail.next = null;
    this.length--;

    return lastNode;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let tmpHead = this.head;

    for (let i = 0; i < this.length; i++) {
      if (tmpHead.value === target) {
        return true;
      }

      tmpHead = tmpHead.next;
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let tmpHead = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) return tmpHead;
      tmpHead = tmpHead.next;
    }
  }

  // TODO: Implement the set method here
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.addToHead(value);
    if (index === this.length) return !!this.addToTail(value);

    let nodeBeforeIndex = this.get(index - 1);
    let nodeIndex = nodeBeforeIndex.next;

    let newNode = new Node(value);
    nodeBeforeIndex.next = newNode;
    newNode.next = nodeIndex;
    this.length++;

    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    let nodeBeforeIndex = this.get(index - 1);
    let nodeIndex = nodeBeforeIndex.next;
    let nodeAfterIndex = nodeIndex.next;

    nodeBeforeIndex.next = nodeAfterIndex;
    this.length--;

    return nodeIndex;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
