# https://leetcode-cn.com/problems/add-two-numbers/
# Definition for singly-linked list.
from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        ret = ListNode(0)
        ptr = ret
        c = 0  # 进位
        while l1 or l2:
            res = 0
            if l1 and l2:
                res = (l1.val + l2.val + c) % 10
                c = (l1.val + l2.val + c) // 10
                l1 = l1.next
                l2 = l2.next
            elif l1:
                res = (l1.val + c) % 10
                c = (l1.val + c) // 10
                l1 = l1.next
            elif l2:
                res = (l2.val + c) % 10
                c = (l2.val + c)//10
                l2 = l2.next
            ptr.next = ListNode(res)
            ptr = ptr.next
        if c:
            ptr.next = ListNode(c)
        return ret.next
