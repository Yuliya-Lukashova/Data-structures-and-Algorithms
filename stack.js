class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(limit=0) {
    this.limit = limit;
    this.length = 0;
    this.current = null;
  }

  add(value) {
    if (this.length === this.limit) return;
    const node = new Node(value);
    node.next = this.current;
    this.current = node;
    this.length ++;
  }

  pop() {
    if (!this.current) return;
    const node = this.current;
    this.current = this.current.next;
    this.length --;
    return node.value;
  }

  print() {
    let node = this.current;
    while (node) {
      console.log(node.value)
      node = node.next;
    }
  }
}
