# https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
"""
# Definition for a Node.

"""


class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        if not root:
            return None
        lst = []

        def recur(root: 'Node'):
            if not root:
                return
            recur(root.left)
            lst.append(root)
            recur(root.right)
        recur(root)
        for i in range(len(lst)-1):
            lst[i].right = lst[i+1]
            lst[i+1].left = lst[i]
        last = lst[len(lst)-1]
        lst[0].left = last
        last.right = lst[0]
        return lst[0]
