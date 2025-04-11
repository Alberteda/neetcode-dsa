// Node Class
var ListNode = /** @class */ (function () {
  function ListNode(data, next) {
    if (next === void 0) {
      next = null;
    }
    this.data = data;
    this.next = next;
  }
  return ListNode;
})();
// Linked Lists System
var LinkedList = /** @class */ (function () {
  function LinkedList() {
    this.head = null;
    this.size = 0;
  }
  // Insert First Node
  LinkedList.prototype.insertFirst = function (data) {
    this.head = new ListNode(data, this.head);
    this.size++;
  };
  // Insert Last Node
  LinkedList.prototype.insertLast = function (data) {
    var count = 0;
    var current;
    // Check if List is empty
    if (this.head) {
      current = this.head;
    } else {
      this.insertFirst(data);
    }
    while (count < this.size) {
      count++;
      if ((current === null || current === void 0 ? void 0 : current.next) != null) {
        current = current === null || current === void 0 ? void 0 : current.next;
      } else if (current) {
        current.next = new ListNode(data, current === null || current === void 0 ? void 0 : current.next);
      }
    }
    this.size++;
  };
  // Insert At Index
  LinkedList.prototype.insertAtIndex = function (data, index) {
    // Ensure that the index provided is positive and does not exceed linked list size range
    if (index < 0 && index > this.size - 1) {
      return;
    }
    // If Index is zero, call insertFirst
    index === 0 && this.insertFirst(data);
    var count = 0;
    var current, previous;
    current = this.head;
    while (count < index) {
      count++;
      previous = current;
      current = current ? (current === null || current === void 0 ? void 0 : current.next) : null;
    }
    var newNode = new ListNode(data, current);
    previous.next = newNode;
  };
  // Get At Index
  // Remove At Index
  // Clear List
  // Print List Data
  LinkedList.prototype.printListData = function () {
    var current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
  return LinkedList;
})();
var ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertAtIndex(100, 2);
ll.printListData();
