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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    var p = head,
        t = head;
    while (k > 0) {
        t = t.next;
        k--;
    }
    while (t != null) {
        p = p.next;
        t = t.next;
    }
    return p;

};
var lst1 = new ListNode(1);
// var lst2 = new ListNode(2);
// var lst3 = new ListNode(3);
// var lst4 = new ListNode(4);
// var lst5 = new ListNode(5);
// lst1.next = lst2;
// lst2.next = lst3;
// lst3.next = lst4;
// lst4.next = lst5;
console.log(getKthFromEnd(lst1, 1));