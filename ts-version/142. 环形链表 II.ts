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
function detectCycle(head: ListNode | null): ListNode | null {
    let ptr1 = head,
        ptr2 = head;
    while (ptr2 && ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
        if (ptr1 === ptr2) {
            break;
        }
    }
    if (ptr2 == null || ptr2.next == null) {
        return null;
    }
    ptr1 = head;
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1;
}
