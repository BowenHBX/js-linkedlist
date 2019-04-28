/**
 * 双向链表的节点
 */
class DoubleNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

module.exports = DoubleNode;