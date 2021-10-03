# https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        pre, cur = head, head
        if val == head.val:
            return head.next
        cur = cur.next
        while cur:
            if val == cur.val:
                pre.next = cur.next
                cur.next = None
                break
            pre = pre.next
            cur = cur.next
        return head
