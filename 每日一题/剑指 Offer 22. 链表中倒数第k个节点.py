# https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        n = 0
        ptr = head
        while ptr:
            n += 1
            ptr = ptr.next
        ptr = head
        while n-k:
            n -= 1
            ptr = ptr.next
        return ptr
