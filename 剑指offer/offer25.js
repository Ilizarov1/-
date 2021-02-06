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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var p = l1,
        q = l2;
    var t = null,
        head = null;
    head = new ListNode(0);
    t = head;
    while (p != null && q != null) {
        if (p.val > q.val) {
            t.next = q;
            q = q.next;
        } else {
            t.next = p;
            p = p.next;
        }
        t = t.next;
    }
    if (p != null) {
        t.next = p;
    }
    if (q != null) {
        t.next = q;
    }
    head = head.next;
    return head;
};