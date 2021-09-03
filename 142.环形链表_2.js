/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val
	this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
	let p = head,
		q = head
	// 记录循环次数
	do {
		if (q === null || q.next === null) return null
		p = p.next
		q = q.next.next
	} while (p !== q)

	q = head
	while (p !== q) {
		p = p.next
		q = q.next
	}
	return q
}

/**
 * 快慢指针
 * 1. p每次走1步，q每次走两步
 * 2. 若链表中有环必会在若干次循环后相遇
 * 3. 设n次循环后相遇，链表长度为a+b，环长b, p走过s, q走过2s
 * 4. 则此时2s=s+nb, s=nb
 * 5. q重新从头出发,当q走过a 时，p.q二次相遇，
 *    p在a+nb处，q在a处，此时p,q一定在环的入口
 */
