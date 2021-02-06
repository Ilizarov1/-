/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (root == null) return null;
    let head = null; let pre = null;
    let inOrder = function (cur) {
        if (cur == null) return;
        arguments.callee(cur.left);
        if (pre == null) head = cur;
        else pre.right = cur;
        cur.left = pre;
        pre = cur;
        arguments.callee(cur.right);
    }(root);
    head.left = pre;
    pre.right = head;
    return head;
};
