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
/** https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const ret = [];
    const map = new Map();
    function traverse(root = new TreeNode()) {
        if (root == null) return '#';

        const left = traverse(root.left);
        const right = traverse(root.right);

        // 对二叉树序列化
        const subTree = left + ',' + right + ',' + root.val + ',';
        // 查看相同序列
        const ever = map.get(subTree) || 0;
        // 没有相同序列
        if (ever === 0) map.set(subTree, 0);
        else if (ever === 1) {
            // 含有相同序列, 只加入一次
            ret.push(root);
        }
        // 增加次数
        map.set(subTree, map.get(subTree) + 1);
        return subTree;
    }
    traverse(root);
    return ret;
};
