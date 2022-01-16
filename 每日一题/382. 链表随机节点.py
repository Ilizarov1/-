# https://leetcode-cn.com/problems/linked-list-random-node/
# Definition for singly-linked list.
import math
import random
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def __init__(self, head: Optional[ListNode]):
        self.size = 0
        self.head = head
        ptr = head
        while ptr:
            self.size += 1
            ptr = ptr.next

    def getRandom(self) -> int:
        n = random.randint(0, self.size-1)
        ptr = self.head
        while n:
            ptr = ptr.next
            n -= 1
        return ptr.val

        # Your Solution object will be instantiated and called as such:
        # obj = Solution(head)
        # param_1 = obj.getRandom()
