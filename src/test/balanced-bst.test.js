import { Tree, prettyPrint } from "../balanced-bst.js";

describe('Balanced BST', () => {
    let tree;
    
    beforeEach(() => {
        tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    
    it('Is defined', () => {
        expect(Tree).toBeDefined();
    });

    describe('buildTree()', () => {
        it('Handles a sorted array', () => {
            let node = tree.root;
            expect(node.data).toEqual(5);
        });

        it('Handles an unsorted array', () => {
            tree.buildTree([9,1,8,2,7,3,6,4,5]);
            expect(tree.root.data).toEqual(5);
        });

        it('Handles an array with duplicates, sorted and unsorted', () => {
            tree.buildTree([9,9,1,8,2,7,3,8,6,4,5]);
            expect(tree.root.data).toEqual(5);

            tree.buildTree([1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]);
            expect(tree.root.data).toEqual(5);
        });
    });

    describe('includes()', () => {
        it('Returns true if value is present', () => {
            expect(tree.includes(9)).toEqual(true);
        });

        it('Returns false if vallue is not present', () => {
            expect(tree.includes(90)).toEqual(false);
        });
    });

    describe('insert()', () => {
        it('Inserts a value into the tree', () => {
            tree.insert(10);
            tree.insert(80);
            tree.insert(0);
            tree.insert(-10);
            tree.insert(3.5);

            console.log(prettyPrint(tree.root));

            expect(tree.includes(10)).toEqual(true);
            expect(tree.includes(80)).toEqual(true);
        });

        it('Does nothing when a value that exists is inserted', () => {
            tree.insert(9);
            console.log(prettyPrint(tree.root));
            //TODO: Add check with a level order callback to count number of a value
            //Should always be one
        });
    });

    describe('delete()', () => {
        beforeEach(() => {
            tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        
        it('Removes a leaf node from the tree', () => {
            tree.delete(9);

            expect(tree.includes(9)).toEqual(false);
            console.log(prettyPrint(tree.root));
        });

        it('Removes a node with a single child', () => {
            tree.delete(8);
            expect(tree.includes(8)).toEqual(false);
            expect(tree.includes(9)).toEqual(true);
            console.log(prettyPrint(tree.root));
        }); 

        it('Removes a node with two children', () => {
            tree.delete(7);
            expect(tree.includes(7)).toEqual(false);
            expect(tree.includes(8)).toEqual(true);
            expect(tree.includes(9)).toEqual(true);
            expect(tree.includes(6)).toEqual(true);
            console.log(prettyPrint(tree.root));
        });
    });
});


/* 
describe('Hash Map', () => {
    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap();
        hashMap.set('Lydia', 'Fiance');
        hashMap.set("Nicole", "Mother");
        hashMap.set("David", "Father");
    });
*/