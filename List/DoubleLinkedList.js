const DoubleNode = require('./DoubleNode');

/**
 * 双向链表的实现
 */
class DoubleLinkedList {
  constructor() {
    this._head = new DoubleNode("This is head node");
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    console.log('linkedList.size:', this._size);
    return this._size;
  }

  getHead() {
    return this._head;
  }

  dispReverse() {
    let currNode = this.findLast();
    while (currNode !== this.getHead()) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  };

  display() {
    let currNode = this.getHead().next;
    while (currNode) {
      console.log(currNode.element);
      currNode = currNode.next;
    }
  }

  find(item) {
    if (item === null) {
      return null;
    }
    let currNode = this.getHead();
    while (currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findLast() {
    let currNode = this.getHead();
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    if (item) {
      let node = this.find(item);
      if (node === null) {
        return;
      }
      if (node.next === null) {
        node.previous.next = null;
        node.previous = null;
      } else {
        node.previous.next = node.next;
        node.next.previous = node.previous;
        node.next = null;
        node.previous = null;
      }
      this._size--;
    }
  }

  /**
   * 在item之后插入newElement
   * @param newElement
   * @param item
   */
  insert(newElement, item) {
    let newNode = new DoubleNode(newElement);
    let finder = item ? this.find(item) : null;
    if (finder) {
      newNode.next = finder.next;
      newNode.previous = finder;
      finder.next.previous = newNode;
      finder.next = newNode;
    } else {
      let last = this.findLast();
      newNode.previous = last;
      last.next = newNode;
    }
    this._size++;
  }

  add(item) {
    if (item) {
      this.insert(item);
    }
    return null;
  }
}

module.exports = DoubleLinkedList;