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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = new Array();
    let path = new Array();
    let recur = function (root, tar) {
        if (root == null)
            return;
        path.push(root.val);
        tar -= root.val;
        if (tar == 0 && root.left == null && root.right == null)
            res.push(Array.from(path));
        arguments.callee(root.left, tar);
        arguments.callee(root.right, tar);
        path.pop();
    };
    recur(root, sum);
    return res;
};
