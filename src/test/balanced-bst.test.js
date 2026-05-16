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