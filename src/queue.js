const {
	NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.start = null;
	}

	getUnderlyingList() {
		return this.start;

	}

	enqueue(value) {
		if (!this.start) {
			this.start = new ListNode(value);
			return;
		}
		let el = this.start;
		while(el.next){
			el = el.next;
		}
		let newEl = new ListNode(value);
		el.next = newEl;


	}

	dequeue() {
		// let el = this.start;
		// while(el.next){
		// 	el = el.next;
		// }
		// return el;
		let result = this.start;
		this.start = this.start.next;
		return result.value;
	}
}

module.exports = {
	Queue
};