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
 * @return {number}
 */
var maxDepth = function (root) {
	const depth = (root) => {
		if (root == null) return 0;
		let dp = 0;
		if (root.left == null && root.right == null) dp = 1;
		else dp += Math.max(depth(root.left), depth(root.right)) + 1;
		return dp;
	};
	return depth(root);
};
