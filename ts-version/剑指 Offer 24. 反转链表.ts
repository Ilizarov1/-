/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let pre: ListNode = null;
    let cur = head;
    while (cur) {
        const tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }

    return pre;
}
