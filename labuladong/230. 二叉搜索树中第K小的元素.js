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
/**https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let rank = 0; // 标记访问的排名
    let ret = 0;
    function traverse(root) {
        if (root == null) return;
        traverse(root.left);
        if (++rank === k) {
            ret = root.val;
            return;
        }
        traverse(root.right);
    }
    traverse(root);
    return ret;
};
