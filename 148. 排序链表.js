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
var sortList = function (head) {
	if (head === null) return null

	const merge = (lst1, lst2) => {
		// 合并两段链表
		let resLst = null
		let r = null // 尾插法
		let [p, q] = [lst1, lst2]
		const insert = (node) => {
			if (resLst === null) {
				// 头节点未插入
				resLst = node
				r = node
			} else {
				// 尾插
				r.next = node
				r = r.next
			}
		}
		while (p !== null && q !== null) {
			if (p.val < q.val) {
				insert(p)
				p = p.next
			} else {
				insert(q)
				q = q.next
			}
		}
		// 剩下的，较长一条链表
		if (p !== null) {
			r.next = p
		}
		if (q !== null) {
			r.next = q
		}
		return resLst
	}
	const msort = (head) => {
		// 无需2分
		if (head.next === null || head === null) return head
		// 继续2分
		// 快慢指针找到中点，切断链表
		let s = head,
			f = head.next
		while (f !== null && f.next !== null) {
			s = s.next
			f = f.next.next
		}
		// 第二段链表
		let lst2 = s.next
		// 切断
		s.next = null

		head = msort(head)

		lst2 = msort(lst2)

		return merge(head, lst2)
	}
	return msort(head)
}

/**
 * 1.归并排序
 */

let n1 = new ListNode(4)
let n2 = new ListNode(2)
let n3 = new ListNode(1)
let n4 = new ListNode(3)
n1.next = n2
n2.next = n3
n3.next = null
n4.next = null
sortList(n1)
