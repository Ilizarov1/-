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
/**https://leetcode-cn.com/problems/delete-node-in-a-bst/
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) return null;
    if (root.val === key) {
        // 删除操作
        // 1. 没有子节点, 直接删除
        // 2. 只有一个子节点情况，直接继承
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        // 3. 左右子树均存在，需要寻找右子树中的最小节点替换
        const minNode = getMin(root.right);
        // 删除该节点
        root.right = deleteNode(root.right, minNode.val);
        // 替换为当前节点
        minNode.left = root.left;
        minNode.right = root.right;
        return minNode;
    }
    // 递归
    if (key > root.val) root.right = deleteNode(root.right, key);
    if (key < root.val) root.left = deleteNode(root.left, key);

    function getMin(root) {
        while (root.left != null) root = root.left;
        return root;
    }

    return root;
};
