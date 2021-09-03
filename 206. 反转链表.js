/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	// 原地反转
	let cur = head
	let pre = null
	let tmp = cur
	while (cur !== null) {
		tmp = cur.next
		cur.next = pre
		pre = cur
		cur = tmp
	}
	return pre
}

const recurReverse = (head) => {
	// 递归反转
	if (head.next === null || head === null) return head

	let ret = recurReverse(head.next)
	head.next.next = head
	head.next = null
	return ret
}
