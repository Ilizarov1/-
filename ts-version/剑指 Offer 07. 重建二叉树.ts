/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length) return null;

    const root = preorder[0];
    const index = inorder.indexOf(root);
    const left = inorder.slice(0, index);
    const right = inorder.slice(index + 1);

    const rootNode = new TreeNode(
        root,
        left.length > 0 ? buildTree(preorder.slice(1, index + 1), left) : null,
        right.length > 0 ? buildTree(preorder.slice(index + 1), right) : null
    );

    return rootNode;
}
