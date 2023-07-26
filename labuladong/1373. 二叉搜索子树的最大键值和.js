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
/**https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
    let maxSum = 0;
    function traverse(root) {
        // [是否为BST, 该节点为根子树最小值, 该节点为根子树的最大值, 该节点为根子树的键值和]
        if (root == null) return [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];

        let ret = [];
        // 递归查找
        const left = traverse(root.left);
        const right = traverse(root.right);

        // 后序遍历
        // 判断是否为BST, 根要大于左子树最大值, 小于右子树最小值
        if (left[0] === 1 && right[0] === 1 && root.val > left[2] && root.val < right[1]) {
            ret[0] = 1;
            ret[1] = Math.min(root.val, left[1]);
            ret[2] = Math.max(root.val, right[2]);
            ret[3] = left[3] + right[3] + root.val;
            maxSum = Math.max(ret[3], maxSum);
        } else {
            // 不为BST, 不作其他处理
            ret[0] = 0;
        }
        return ret;
    }
    traverse(root);
    return maxSum;
};
