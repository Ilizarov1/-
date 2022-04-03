/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (root == null) return 0;
    let max = 0;
    function maxDepth(root) {
        if (root == null) return 0;
        // 后序遍历
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        const curMax = left + right;
        max = Math.max(curMax, max);
        return 1 + Math.max(left, right);
    }
    maxDepth(root);
    return max;
};
