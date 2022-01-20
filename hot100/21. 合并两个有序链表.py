# https://leetcode-cn.com/problems/merge-two-sorted-lists/
# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not (list1 or list2):
            return None
        ptr1, ptr2 = list1, list2
        head = ListNode()
        ret = head
        while ptr1 and ptr2:
            if ptr1.val > ptr2.val:
                head.next = ptr2
                ptr2 = ptr2.next
            else:
                head.next = ptr1
                ptr1 = ptr1.next
            head = head.next
        if ptr1:
            head.next = ptr1
        if ptr2:
            head.next = ptr2
        return ret.next
