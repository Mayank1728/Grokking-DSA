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
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
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
    console.log(dummy.next);
    return dummy.next;
    // Time : O(N)
  }
  length() {
    let nodes = 0;
    let curr = this.head;
    while (curr) {
      curr = curr.next;
      nodes++;
    }
    console.log(nodes);
    return nodes;
    // Time : O(N)
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
    // Time : O(N)
  }
  detectLoop() {
    // tortoise and hare algo by Floyd
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        console.log('Cycle detected');
        return true;
      }
    }
    console.log('Cycle NOT detected!');
    return false;
    // Time : O(N)
  }
  findMiddle() {
    // again fast and slow pointers
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return slow;
  }
  removeDup() {
    if (!this.head) return false;
    let map = {};
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (!map[curr.val]) {
        map[curr.val] = 1;
        prev = curr;
      } else {
        prev.next = curr.next;
      }
      curr = curr.next;
    }
    return this.head;
    // Time : O(N)
    // Space : O(N)
    /* 
       for(let i = this.head; i != null; i = i.next) {
        let prev = i;
          for(let j = i.next; j != null; j = j.next){
            if(j.val === i.val)
              prev.next = j.next;
            else
              prev = j;
          }
      }
      return this.head;
      Time : O(N^2) and Space O(1)
    */
  }
}
function union(l1, l2) {
  // if l1 and l2 are empty
  if (!l1 && !l2) return undefined;

  let l;
  if (l1 && !l2) l = l1; // if ONLY l1
  if (!l1 && l2) l = l2; // if ONLY l2
  if (l1 && l2) {
    // joining both l1 and l2
    l = l1;
    let start = l1;
    while (l.next) {
      l = l.next;
    }
    l.next = l2;
    // l is initialized to head again
    l = start;
  }
  // hasmap or Object keeps track of values
  let map = {};
  let prev = null;
  for (let curr = l; curr != null; curr = curr.next) {
    // if unique node
    if (!map[curr.val]) {
      map[curr.val] = 1;
      prev = curr;
    }
    // this means duplicate node
    // remove dup node using prev
    else {
      prev.next = curr.next;
    }
  }
  return l;
  // Time : O(N + M)
  // Space : O(N + M)
}

function intersection(l1, l2) {
  if (!l1 && !l2) return;
  if (!l1) return l2;
  if (!l2) return l1;

  let map = {};
  for (let i = l1; i != null; i = i.next) {
    if (!map[i.val]) {
      map[i.val] = 1;
    }
  }
  let head = new Node();
  let curr = head;
  for (let j = l2; j != null; j = j.next) {
    if (map[j.val]) {
      curr.next = new Node(j.val);
      curr = curr.next;
      map[j.val] = 0;
    }
  }
  return head.next;
  // Time : O(N + M)
  // Space : O(N)
}
function nthFromEnd(l, n) {
  if (!l || n < 1) return undefined;

  let prev = null;
  let curr = l;
  let len = 0;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    len++;
  }

  if (len < n) return -1;

  let flag = 0;
  for (let j = prev; j != null; j = j.next) {
    flag++;
    if (flag === n) return j.val;
  }
  // Time : O(N)
  // Space : O(1)
}
let cars = new singlyLinkedList();
cars.head = new Node('Audi');
cars.head.next = new Node('BMW');
console.log(cars);
