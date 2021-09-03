/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (root == null) return null;
    if (root.left == null && root.right == null) return root;
    let temp = root.right;
    root.right=arguments.callee(root.left);
    root.left = arguments.callee(temp);
    return root;
};