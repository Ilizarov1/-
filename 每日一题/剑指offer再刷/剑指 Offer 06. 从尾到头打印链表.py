# https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
# Definition for singly-linked list.
from typing import List


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        s = []
        p = head
        while p:
            s.append(p.val)
            p = p.next
        s.reverse()
        return s
