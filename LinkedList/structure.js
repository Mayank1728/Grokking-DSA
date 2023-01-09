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
  }
  // add methods such
  // insert and delete from at head and tail
  // inset and delete in between
  // searching
  // isEmpty
  // each with time comp
}

let cars = new singlyLinkedList();
cars.head = new Node('Audi');
cars.head.next = new Node('BMW');
console.log(cars);
