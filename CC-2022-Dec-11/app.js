// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

//Leetcode 700 image

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]


var searchBST = function (root, val) {
    if (!root) { return null; }
    if (root.val === val) {
        return root;
    }
    if (val > root.val) {
        return searchBST(root.right, val);
    }
    if (val < root.val) {
        return searchBST(root.left, val);
    }

};