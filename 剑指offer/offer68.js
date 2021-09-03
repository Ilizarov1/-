/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (root == null) return null
	while (root != null) {
		if (p.val > root.val && q.val > root.val) {
			// 都在右子树
			root = root.right
		} else if (p.val < root.val && q.val < root.val) {
			// 都在左子树
			root = root.left
		} else {
			//分别在左右两侧
			return root
		}
	}
}
