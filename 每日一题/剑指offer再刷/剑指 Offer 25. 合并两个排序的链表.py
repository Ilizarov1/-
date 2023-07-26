# https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        i, j = l1, l2
        if not i:
            return j
        if not j:
            return i
        cur = None
        if i.val > j.val:
            cur = j
            j = j.next
        else:
            cur = i
            i = i.next
        head = cur
        while i and j:
            if i.val > j.val:
                cur.next = j
                cur = cur.next
                j = j.next
            else:
                cur.next = i
                cur = cur.next
                i = i.next
        if i:
            cur.next = i
        if j:
            cur.next = j
        return head
