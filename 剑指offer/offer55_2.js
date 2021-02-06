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
var isBalanced = function (root) {
	const recur = (root) => {
		let flag = false,
			dp = 0;
		if (root == null) {
			dp = 0;
			flag = true;
			return [dp, flag];
		}
		let lres = recur(root.left);
		let rres = recur(root.right);
		if (lres[1] && rres[1]) flag = true;
		let ldp = lres[0],
			rdp = rres[0];
		if (Math.abs(ldp - rdp) > 1) flag = false;
		if (ldp == 0 && rdp == 0) dp = 1;
		else dp = Math.max(ldp, rdp) + 1;
		return [dp, flag];
	};
	let res = recur(root);
	return res[1];
};
