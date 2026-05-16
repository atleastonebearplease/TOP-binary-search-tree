export class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        arr.sort();

        arr = [...new Set(arr)]; //Combine set, which removes duplicates, with spread operator
        console.log(arr);

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
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

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
console.log("Duplicate Sorted\n\n");