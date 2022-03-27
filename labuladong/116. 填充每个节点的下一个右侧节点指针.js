function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}
/**https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root == null) return root;
    cnnct2node(root.left, root.right);
    return root;
};
function cnnct2node(node1, node2) {
    if (node1 == null || node2 == null) return;
    node1.next = node2;
    cnnct2node(node1.left, node1.right);
    cnnct2node(node2.left, node2.right);
    cnnct2node(node1.right, node2.left);
}
