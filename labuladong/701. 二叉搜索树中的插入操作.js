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
/**https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root == null) return new TreeNode(val);
    else if (root.val < val) root.right = insertIntoBST(root.right, val);
    else root.left = insertIntoBST(root.left, val);

    return root;
};
