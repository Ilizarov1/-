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
function hasCycle(head: ListNode | null): boolean {
    let ptr1 = head,
        ptr2 = head?.next;

    while (ptr1 && ptr2 && ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }

    return ptr1 != null && ptr2 != null && ptr1 === ptr2;
}

const node = new ListNode(1);

console.log(hasCycle(node));
