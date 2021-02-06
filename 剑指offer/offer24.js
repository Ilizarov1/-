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
 * @return {ListNode}
 */
var reverseList = function (head) {
    if(head==null)return null;
    var p = head,
        r = head.next,
        q = null;
    while (r != null) {
        p.next = q;
        q = p;
        p = r;
        r = r.next;
    }
    p.next = q;
    head = p;
    return head;
};
var lst1 = new ListNode(1);
var lst2 = new ListNode(2);
var lst3 = new ListNode(3);
var lst4 = new ListNode(4);
var lst5 = new ListNode(5);
lst1.next = lst2;
lst2.next = lst3;
lst3.next = lst4;
lst4.next = lst5;
console.log(reverseList(lst1));