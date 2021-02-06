/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let lenA = 0;
	let lenB = 0;
	let p = headA;
	while (p != null) {
		lenA++;
		p = p.next;
	}
	p = headB;
	while (p != null) {
		lenB++;
		p = p.next;
	}
	let cnt = 0;
	let q = null;
	if (lenA > lenB) {
		p = headA;
		q = headB;
	} else {
		p = headB;
		q = headA;
	}
	cnt = Math.abs(lenA - lenB);
	while (cnt-- > 0) {
		p = p.next;
	}
	while (p != null && q != null) {
		if (p == q) return p;
		else {
			p = p.next;
			q = q.next;
		}
	}
	return null;
};
