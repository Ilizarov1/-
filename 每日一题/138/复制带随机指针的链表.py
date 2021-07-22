
# https://leetcode-cn.com/problems/copy-list-with-random-pointer/

from typing import Hashable


class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if head == None:
            return None
        nodeMap = {}
        dum = Node(-1)
        tail = dum
        tmp = head
        while tmp != None:
            node = Node(tmp.val)
            nodeMap[tmp] = node
            tail.next = node
            tail = tail.next
            tmp = tmp.next
        tail = dum.next
        tmp = head
        while tail != None:
            if tmp.random != None:
                tail.random = nodeMap[tmp.random]
            tail = tail.next
            tmp = tmp.next
        return dum.next
