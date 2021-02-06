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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	const preOrder = (root) => {
		let tar = 0;
		if (root.right != null) tar += preOrder(root.right);

		k--;
		if (k == 0) tar = root.val;
		if (root.left != null) tar += preOrder(root.left);

		return tar;
	};
	return preOrder(root);
};
