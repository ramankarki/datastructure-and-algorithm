// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.back) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.front) return null;

    let tmp = this.front;
    this.front = this.front.next;
    if (!this.front) this.back = null;
    this.length--;

    return tmp.value;
  }

  size() {
    return this.length < 0 ? 0 : this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
