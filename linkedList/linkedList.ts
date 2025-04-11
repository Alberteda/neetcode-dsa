// Node Class

class ListNode {
  data: any;
  next: ListNode | null;

  constructor(data: any, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked Lists System

class LinkedList {
  head: ListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert First Node

  insertFirst(data: any) {
    this.head = new ListNode(data, this.head);
    this.size++;
  }

  // Insert Last Node

  insertLast(data: any) {
    let count = 0;
    let current;

    // Check if List is empty
    if (this.head) {
      current = this.head;
    } else {
      this.insertFirst(data);
    }

    while (count < this.size) {
      count++;
      if (current?.next != null) {
        current = current?.next;
      } else if (current) {
        current.next = new ListNode(data, current?.next);
      }
    }

    this.size++;
  }

  // Insert At Index

  insertAtIndex(data: any, index: number) {
    // Ensure that the index provided is positive and does not exceed linked list size range

    if (index < 0 && index > this.size - 1) {
      return;
    }

    // If Index is zero, call insertFirst

    index === 0 && this.insertFirst(data);

    let count = 0;
    let current: ListNode | null, previous;

    current = this.head;

    while (count < index) {
      count++;
      previous = current;
      current = current ? current?.next : null;
    }
    let newNode: ListNode = new ListNode(data, current);
    previous.next = newNode;
  }

  // Get At Index

  // Remove At Index

  // Clear List

  // Print List Data

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);

ll.insertAtIndex(100, 2);

ll.printListData();
