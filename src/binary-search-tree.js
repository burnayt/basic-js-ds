const {
	NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');
class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left || null;
		this.right = right || null;
		this.p = null;
	}

}

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

	constructor() {
		this.start = null;
	}
	root() {
		return this.start;
	}

	add(data) {
		let z = new Node(data);
		let y = null;
		let x = this.start;
		while (x != null) {
			y = x;
			if (z.data < x.data) {
				x = x.left;
			} else {
				x = x.right;
			}
		}
		z.p = y;
		if (y == null) {
			this.start = z;
		} else if (z.data < y.data) {
			y.left = z
		} else {
			y.right = z;
		}
	}

	has(data) {
		let result = this.treeSearch(this.start, data);
		if (result) {
			return true;
		} else {
			return false;
		}
	}

	treeSearch(x, data) {
		if (x == null || x.data == data) {
			return x;
		}
		if (data < x.data) {
			return this.treeSearch(x.left, data);
		} else {
			return this.treeSearch(x.right, data);
		}

	}
	iterativeTreeSearch(x, data) {
		while (x != null && x.data != data) {
			if (data < x.data) {
				x = x.left;
			} else {
				x = x.right;
			}
		}
		return x;
	}

	find(data) {
		return this.treeSearch(this.start, data)

	}

	remove(data) {
		throw new NotImplementedError('Not implemented');
		// const removeNode = function (node, data) {
		// 	if (node == null) {
		// 		return null;
		// 	}
		// 	if (data == node.data) {
				 
		// 		if (node.left == null && node.right == null) {
		// 			return null;
		// 		}
				 
		// 		if (node.left == null) {
		// 			return node.right;
		// 		}
				 
		// 		if (node.right == null) {
		// 			return node.left;
		// 		}
				 
		// 		var tempNode = node.right;
		// 		while (tempNode.left !== null) {
		// 			tempNode = tempNode.left;
		// 		}
		// 		node.data = tempNode.data;
		// 		node.right = removeNode(node.right, tempNode.data);
		// 		return node;
		// 	} else if (data < node.data) {
		// 		node.left = removeNode(node.left, data);
		// 		return node;
		// 	} else {
		// 		node.right = removeNode(node.right, data);
		// 		return node;
		// 	}
		// }
		// this.start = removeNode(this.start, data);

	}

	min() {
		let n = this.start;
		while (n.left != null) {
			n = n.left;
		}
		return n.data;
	}

	max() {
		let n = this.start;
		while (n.right != null) {
			n = n.right;
		}
		return n.data;
	}
}

module.exports = {
	BinarySearchTree
};