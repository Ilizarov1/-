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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head == null || head.next == null || left === right) {
        return head;
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let suc = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    function reverse(head: ListNode | null) {
        let pre = null,
            cur = head;
        if (head == null || head.next == null) {
            return head;
        }

        while (cur != null) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
    }

    reverse(leftNode);

    pre.next = rightNode;
    leftNode.next = suc;

    return dummy.next;
}
