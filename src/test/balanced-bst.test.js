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
            let node = tree.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(node.data).toEqual(5);
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