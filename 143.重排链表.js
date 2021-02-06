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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (head === null || head.next === null) return

	let fast = head,
		slow = head
	while (fast !== null) {
		if (fast === null || fast.next === null) break
		else {
			slow = slow.next
			fast = fast.next.next
		}
	}
	// slow为后半截链表首节点
	let p = null,
		q = slow.next,
		pos = slow
	// 记录，防止断链
	while (pos !== null) {
		pos.next = p
		p = pos
		pos = q
		if (q !== null) q = q.next
		// 原地逆置
	}
	let front = head.next,
		rear = p
	// 交替尾插形成新链表
	let r = head
	while (rear !== null || front !== slow) {
		if (rear !== null) {
			r.next = rear
			rear = rear.next
			r = r.next
		}
		if (front !== null && front !== slow) {
			r.next = front
			front = front.next
			r = r.next
		}
	}
	r.next = null
}

/**
 * 1. 利用快慢指针找到中间节点
 * 2. 对后半截链表进行原地逆置
 * 3. 重排链表
 */
let l1 = new ListNode(1)
// let l2 = new ListNode(2)
// let l3 = new ListNode(3)
// let l4 = new ListNode(4)
// l1.next = l2
// l2.next = l3
// l3.next = l4
// l4.next = null
console.log(reorderList(l1))
