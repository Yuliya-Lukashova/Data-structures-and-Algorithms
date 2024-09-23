class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
  }

  pop() {
    const node = this.head;
    this.head = node?.next ?? null;
    this.length --;
    return node;
  }

  print() {
    let current = this.head;
    do {
      console.log(current?.value);
      current = current?.next;
    } while (current)
  }
}
