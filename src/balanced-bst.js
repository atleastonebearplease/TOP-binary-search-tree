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