/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	if (root === null) return []
	let res = [],
		stack = []
	stack.push(root)
	while (stack.length !== 0) {
		let top = stack.pop()
		res.push(top.val)
		if (top.left !== null) stack.push(top.left)
		if (top.right !== null) stack.push(top.right)
	}
	res = res.reverse()
	return res
}
