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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true;
    return recur(root.left,root.right);
    
};
function recur(A,B) {
    if (A == null && B == null) return true;
    if (A != null && B == null) return false;
    if (A == null && B != null) return false;
    return (A.val == B.val) && recur(A.left, B.right) && recur(A.right, B.left);
}

