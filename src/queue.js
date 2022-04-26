const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  stack = [];
  getUnderlyingList() {
    return this.stack.reverse().reduce((prev, cur) => {
      if (prev) {
        const node = new ListNode(cur);
        node.next = prev;
        return node;
      }

      return new ListNode(cur);
    }, null);
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    let del = this.stack[0]
    this.stack.shift();
    return del
  }
}

module.exports = {
  Queue
};
