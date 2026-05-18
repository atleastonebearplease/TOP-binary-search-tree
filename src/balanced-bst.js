import { LinkedList } from "./linkedList";

export class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        arr.sort();

        arr = [...new Set(arr)]; //Combine set, which removes duplicates, with spread operator

        this.root = this.#sortedArrayToBST(arr);
        return this.root;
    }

    #sortedArrayToBST(arr) {
        return this.#sortedArrayToBSTRecur(arr, 0, arr.length - 1);
    }

    #sortedArrayToBSTRecur(arr, start, end) {
        if(start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        //Divide from middle element
        root.left = this.#sortedArrayToBSTRecur(arr, start, mid - 1);
        root.right = this.#sortedArrayToBSTRecur(arr, mid + 1, end);

        return root;
    }

    includes(value) {
        if(!this.root) return false; //BST is empty
        let node = this.root;

        while(node) {
            if(value === node.data) return true;

            if(value < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return false;
    }

    insert(value) {
        if(!this.root) {
            this.root = new Node(value);
            return;
        }

        let node = this.root;

        while(node) {
            if(value === node.data) return;

            if(value < node.data) {
                if(node.left) {
                    node = node.left;
                    continue;
                }

                node.left = new Node(value);
                return;
            } else {
                if(node.right) {
                    node = node.right;
                    continue;
                }

                node.right = new Node(value);
                return;
            }
        }
    }

    delete(value) {
        this.root = this.#deleteNodeRecur(this.root, value);
    }

    #deleteNodeRecur(root, x) {
        if(root === null)
            return root;

        if(root.data > x)
            root.left = this.#deleteNodeRecur(root.left, x);
        else if(root.data < x)
            root.right = this.#deleteNodeRecur(root.right, x);
        else {
            if(root.left === null)
                return root.right;
            if(root.right === null)
                return root.left;

            //Node with 2 children
            const succ = this.#getSuccessor(root);
            root.data = succ.data;
            root.right = this.#deleteNodeRecur(root.right, succ.data);
        }
        
        return root;
    }

    #getSuccessor(curr) {
        curr = curr.right;
        while(curr !== null && curr.left !== null)
            curr = curr.left;

        return curr;
    }

    levelOrderForEach(callback) {
        /* 
        If there is no root, return
        If there is no callback, throw error

        Create queue
        Add root to queue
        While the queue is not empty
            execute the callback on the data
            queue the left, then right children of the node
        */

        if(!callback) {
            throw new Error("A callback is required");
        }

        if(!this.root) return;

        let q = new LinkedList();

        q.push(this.root);

        while(q.size() !== 0) {
            let node = q.pop();

            callback(node.data);

            if(node.left)
                q.push(node.left);
            if(node.right)
                q.push(node.right);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return '';
  }

  const right = prettyPrint(
    node.right,
    `${prefix}${isLeft ? '│   ' : '    '}`,
    false,
  );

  const current = `${prefix}${isLeft ? '└── ' : '┌── '}${node.data}\n`;

  const left = prettyPrint(
    node.left,
    `${prefix}${isLeft ? '    ' : '│   '}`,
    true,
  );

  return `${right}${current}${left}`;
};
/* 
let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);

prettyPrint(tree.root);
console.log("Sorted\n\n");


tree.buildTree([9,1,8,2,7,3,6,4,5]);
prettyPrint(tree.root);
console.log("Unsorted\n\n");

tree.buildTree([9,9,1,8,2,7,3,8,6,4,5]);
prettyPrint(tree.root);
console.log("Duplicate Unsorted\n\n");

tree.buildTree([1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 9]);
prettyPrint(tree.root);    
console.log("Duplicate Sorted\n\n"); */