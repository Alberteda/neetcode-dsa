// List Node
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Define LinkedLists
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert First Node

  insertFirst(data) {
    if (this.head) {
      console.log("linked list already has a first node, list not empty!");
      return;
    }

    return (this.head = new ListNode(data)), this.size++;
  }

  //   Insert Last Node

  insertLast(data) {
    let newNode = new ListNode(data);

    // when there is no linkedlist and when there's only one Node in the list
    if (this.head === null) {
      console.log(`list is empty the head is ${this.head} \n...try inserting a node first`);
      return;
    } else if (this.head.next === null) {
      this.head.next = newNode;
      newNode.next = null;
      console.log(`insert last... new node data => ${newNode.data}`);
      this.size++;
      return;
    }

    // when there're multiple nodes in the list

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    this.size++;
  }

  // Insert At Index

  insertAtIndex(index, data) {
    if (index > this.size - 1) return;

    let newNode = new ListNode(data);

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count !== index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = newNode;

    newNode.next = current;

    this.size++;

    console.log(`previous --> ${previous.data}, \n current --> ${current.data}`);
  }

  // Get At Index

  getAtIndex(index) {
    if (index > this.size - 1) return;

    let current = this.head;
    let count = 0;

    while (count !== index) {
      count++;
      current = current.next;
    }

    console.log(`at index -> ${index}, in the linked list the data is -> ${current.data}`);
  }

  // Remove At Index

  removeAtIndex(index) {
    if (index > this.size - 1) return;

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count !== index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    current = null;

    this.size--;
  }

  // Clear List
  clearList() {
    console.log(`Clear List...`);

    this.head = null;
  }

  // Reverse Linked List

  reverseListIterative() {
    if (this.head === null) return;

    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  reverseListRecurssive() {
    if ((this.head == null) | (this.head.next == null)) {
      return this.head;
    }

    reversedListNode = this.reverseListRecurssive(this.head.next);

    this.head.next.next = this.head;
    this.head.next = null;

    this.reverseListRecurssive();
  }

  // Merge Two Sorted Lists

  // Print List Data

  printAllNodes() {
    if (this.head === null) {
      console.log(`List is Empty`);
      return;
    }

    let count = 0;
    let current = this.head;
    let listArr = [];

    while (count < this.size) {
      count++;
      listArr.push(current.data);
      current = current.next;
    }

    console.log(`the current lists -> ${listArr}`);
  }
}

const testerLS = new LinkedList();

testerLS.insertFirst(100);
testerLS.insertLast(200);
testerLS.insertLast(300);

testerLS.insertAtIndex(2, 400);
testerLS.printAllNodes();

// testerLS.removeAtIndex(3);

// testerLS.clearList();

testerLS.reverseListIterative();
// testerLS.reverseListRecurssive

testerLS.printAllNodes();
