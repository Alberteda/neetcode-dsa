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
  }

  // Insert Last Node

  // Insert At Index

  // Get At Index

  // Remove At Index

  // Clear List

  // Print List Data
}
