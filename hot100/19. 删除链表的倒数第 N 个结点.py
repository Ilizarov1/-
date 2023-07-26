# https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        length = 0
        ptr = head
        while ptr:
            length += 1
            ptr = ptr.next

        if length == 1:
            return None

        if n == length:
            return head.next

        ptr = head
        cnt = length - n - 1

        while cnt:
            ptr = ptr.next
            cnt -= 1
        ptr.next = ptr.next.next
        return head


node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
x = Solution()
print(x.removeNthFromEnd(node1, 2))
