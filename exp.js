// class BinaryNode {
//     constructor(data, left, right) {
//         this.data = {
//             data: data
//         };
//         this.left = left;
//         this.right = right;
//     }
//     setLeft(left) {
//         this.left = left;
//     }
//     getLeft() {
//         return this.left;
//     }
//     setRight(right) {
//         this.right = right;
//     }
//     getRight() {
//         return this.right;
//     }
//     getDataObject() {
//         return this.data;
//     }
//     getData() {
//         return this.data.data;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.rootNode = null;
//     }

//     root() {
//         if (this.rootNode == null) {
//             return null;
//         }
//         return this.rootNode.getDataObject();

//     }

//     add(data) {
//         if (this.rootNode == null) {
//             this.rootNode = new BinaryNode(data);
//             return;
//         }


//         let currentElement = this.rootNode;
//         while (true) {
//             if (data > currentElement.getData()) {
//                 if (currentElement.getRight()) {
//                     currentElement = currentElement.getRight();
//                 } else {
//                     let node = new BinaryNode(data);
//                     currentElement.setRight(node);
//                     return;
//                 }

//             } else {
//                 if (currentElement.getLeft()) {
//                     currentElement = currentElement.getLeft();
//                 } else {
//                     let node = new BinaryNode(data);
//                     currentElement.setLeft(node);
//                     return;
//                 }

//             }
//         }


//     }

//     has(data) {
//         let currentElement = this.rootNode;

//         if (currentElement == null || currentElement == undefined) {
//             return false;
//         }

//         while (true) {
//             if (data == currentElement.getData()) {
//                 return true;
//             } else if (data > currentElement.getData()) {
//                 if (currentElement.getRight()) {
//                     currentElement = currentElement.getRight();
//                 } else {
//                     return false;
//                 }
//             } else {
//                 if (currentElement.getLeft()) {
//                     currentElement = currentElement.getLeft();
//                 } else {
//                     return false;
//                 }
//             }
//         }

//     }

//     find(data) {
//         let currentElement = this.rootNode;

//         if (currentElement == null || currentElement == undefined) {
//             return false;
//         }

//         while (true) {
//             if (data == currentElement.getData()) {
//                 return currentElement.getDataObject();
//             } else if (data > currentElement.getData()) {
//                 if (currentElement.getRight()) {
//                     currentElement = currentElement.getRight();
//                 } else {
//                     return null;
//                 }
//             } else {
//                 if (currentElement.getLeft()) {
//                     currentElement = currentElement.getLeft();
//                 } else {
//                     return null;
//                 }
//             }
//         }


//     }

//     remove(data) {
//         const nodes = [];
//         nodes.push({
//             parent: null,
//             child: this.rootNode
//         })
//         let current = null;
//         let parent = null
//         while (nodes.length) {
//             console.log(current? current.data.data : '')
//             parent = nodes.shift()
//             current = parent.child;
//             parent = parent.parent;

//             if (current.getLeft()) {
//                 nodes.push({
//                     parent: current,
//                     child: current.getLeft()
//                 });
//             }
//             if (current.getRight()) {
//                 nodes.push({
//                     parent: current,
//                     child: current.getRight()
//                 });
//             }
//             if (current.getData() == data) {
//                 break;
//             }
//         }

//         // if (current.getLeft() == undefined && current.getRight()) {

//         // }
//         // current is our element

//         // LEFT NODE DELETE
//         if (parent && parent.getLeft() == current) {
//             if(current.getRight() == undefined && current.getLeft() == undefined) {
//                 parent.setLeft(undefined);
//                 return;
//             }

//             if (current.getRight()) {
//                 parent.setLeft(current.getRight());
//             }

//             let leftEnd = parent.getLeft().getLeft();
//             if (leftEnd) {
//                 while (true) {
//                     if (leftEnd.getLeft()) {
//                         leftEnd = leftEnd.getLeft();
//                     } else {
//                         break;
//                     }
//                 }
//             }else {
//                 leftEnd = parent.getLeft() // getLeft MB???
//             }

//             if (current.getLeft()) {
//                 leftEnd.setLeft(current.getLeft());
//             }

//         }

//         if (parent && parent.getRight() == current) {
//             if(current.getRight() == undefined && current.getLeft() == undefined) {
//                 parent.setRight(undefined);
//                 return;
//             }

//             if (current.getRight()) {
//                 parent.setRight(current.getRight());
//             }

//             let leftEnd = parent.getRight().getLeft();
//             if (leftEnd) {
//                 while (true) {
//                     if (leftEnd.getLeft()) {
//                         leftEnd = leftEnd.getLeft();
//                     } else {
//                         break;
//                     }
//                 }
//             } else {
//                 leftEnd = parent.getRight() // getLeft MB???
//             }

//             if (current.getLeft()) {
//                 leftEnd.setLeft(current.getLeft());
//             }

//         }

//         // FOR ROOT
//         if (current == this.rootNode) {
//             this.rootNode = current.getRight();
//             let leftEnd = this.rootNode.getLeft();
//             if (leftEnd) {
//                 while (true) {
//                     if (leftEnd.getLeft()) {
//                         leftEnd = leftEnd.getLeft();
//                     } else {
//                         break;
//                     }
//                 }
//                 leftEnd.setLeft(current.getLeft());
//             }            
//         }


//     }

//     min() {
//         let current = this.rootNode;
//         while (current) {
//             if (current.getLeft()) {
//                 current = current.getLeft();
//             } else {
//                 return current.getData();
//             }
//         }

//     }

//     max() {
//         let current = this.rootNode;
//         while (current) {
//             if (current.getRight()) {
//                 current = current.getRight();
//             } else {
//                 return current.getData();
//             }
//         }


//     }
// }
// const { testOptional, ListNode } = require('./extensions/index.js');
// function convertArrayToList(arr) {
//     return arr.reverse().reduce((acc, cur) => {
//         if (acc) {
//             const node = new ListNode(cur);
//             node.next = acc;
//             return node;
//         }

//         return new ListNode(cur);
//     }, null);
// }

// function removeKFromList(l, k) {
//     let prev = null;
//     let result= null;
//     while (l) {
//         if (l.value == k) {
//             if (prev) { 
//                 prev.next = null;                
//                 while(l && l.value == k){
//                     l = l.next;
//                 }
//                 prev.next = l
//             }
//         }
//         else{
//             if (result == null) {
//                 result = l;
//             }
//             //result.push(l.value)
//         }
//         prev = l;
//         if(l!=null){
//             l = l.next;
//         }
            
//     }
//     return result ;
// }
// let a = convertArrayToList([3, 1, 2, 3, 4, 5]);
// console.log(
// removeKFromList( convertArrayToList([1, 2, 3]),3)
// )

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
		return result.va;
	}
}

const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    console.log(queue.dequeue())
    console.log(queue.dequeue())
