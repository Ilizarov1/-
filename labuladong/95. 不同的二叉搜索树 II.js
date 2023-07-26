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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];
    function build(lo, hi) {
        let ret = [];
        if (lo > hi) {
            ret.push(null);
            return ret;
        }
        // 递归穷举
        for (let i = lo; i <= hi; i++) {
            let leftTree = build(lo, i - 1);
            let rightTree = build(i + 1, hi);
            // 给root节点穷举所有左右子树组合
            for (const left of leftTree) {
                for (const right of rightTree) {
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    ret.push(root);
                }
            }
        }
        return ret;
    }
    return build(1, n);
};
console.log(generateTrees(3));
