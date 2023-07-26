# https://leetcode-cn.com/problems/palindrome-linked-list/
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head:
            return True

        def reverse(head):
            pre, cur = None, head
            while cur:
                nxt = cur.next
                cur.next = pre
                pre = cur
                cur = nxt
            return pre

        def findHalf(head):
            slow, fast = head, head
            while fast.next and fast.next.next:
                fast = fast.next.next
                slow = slow.next
            return slow

        back = findHalf(head).next
        back = reverse(back)
        front = head
        ret = True
        while back:
            if back.val != front.val:
                ret = False
                break
            back = back.next
            front = front.next
        return ret
