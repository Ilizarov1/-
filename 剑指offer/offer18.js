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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    var cur = head.next;
    var pre = head;
    if (head.val == val) {
        head = head.next;
    }
    while (cur != null) {
        if (cur.val==val) {
            pre.next = cur.next;
            break;
        }
        else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    return head;
};