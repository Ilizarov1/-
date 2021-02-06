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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (B == null) return false;
    return final(A, B);

};

function isSame(A, B) {
    if (A != null && B == null) return true;
    else if (A == null && B != null) return false;
    else if (A == null && B == null) return true;
    if (A.val != B.val) return false;
    else
        return (A.val == B.val) && arguments.callee(A.left, B.left) &&
            arguments.callee(A.right, B.right);


}

function final(A, B) {
    if (A == null) return false;
    var result = false;
    var rootA = preOrder(A, B);
    if (rootA == null) return false;
    if (isSame(rootA, B)) return true;
    else
        return result || final(rootA.left, B) || final(rootA.right, B);

}

function preOrder(A, B) {//找共同的根
    if (A == null) return null;
    var result = null;
    if (A.val == B.val)
        return A;
    result = arguments.callee(A.left, B);
    if (result != null) return result;
    result = arguments.callee(A.right, B);
    if (result != null) return result;
    return null;

}


var A = new TreeNode(1);
var node1 = new TreeNode(2);
var node2 = new TreeNode(3);
var node3 = new TreeNode(4);
A.left = node1; A.right = node2;
node2.left = node3;
var B = new TreeNode(3);
console.log(isSubStructure(A, B));