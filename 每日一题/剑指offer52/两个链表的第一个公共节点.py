# https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        lenA, lenB = 0, 0
        tempA, tempB = headA, headB
        while tempA != None:
            lenA += 1
            tempA = tempA.next
        while tempB != None:
            lenB += 1
            tempB = tempB.next
        diff = abs(lenA-lenB)
        longerList = headA
        shorterList = headB
        if lenB > lenA:
            longerList = headB
            shorterList = headA
        while diff > 0:
            longerList = longerList.next
            diff -= 1
        while longerList != None and shorterList != None:
            if longerList == shorterList:
                return longerList
            longerList = longerList.next
            shorterList = shorterList.next
        return None
