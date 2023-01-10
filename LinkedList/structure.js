class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return true;
    // Time : O(1)
  }
  pop() {
    if (!this.head) return false;
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      while (curr.next != this.tail) {
        curr = curr.next;
      }
      this.tail = curr;
      this.tail.next = null;
    }
    this.length--;
    return false;
    // Time : O(N)
    // Its O(1) only when you have reference of
    // node
  }
  shift() {
    if (!this.head) return false;
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return true;
    // Time : O(1)
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return true;
    // Time : O(1)
  }
  // inset and delete in between
  // searching
  search(val) {
    if (!this.head) return false;
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        console.log('Found ');
        return true;
      }
      curr = curr.next;
    }
    console.log('NOT Found!');
    return false;
    // Time : O(N)
  }
  // deleting a node using dummy node technique.
  delete(val) {
    let dummy = new Node();
    dummy.next = this.head;
    let curr = this.head;
    let prev = dummy;
    while (curr) {
      if (curr.val === val) prev.next = curr.next;
      else prev = curr;
      curr = curr.next;
    }
    this.length--;
    console.log(dummy.next);
    return dummy.next;
    // Time : O(N)
  }
}

let cars = new singlyLinkedList();
cars.head = new Node('Audi');
cars.head.next = new Node('BMW');
console.log(cars);
