# https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
# Definition for a binary tree node.
from typing import List
import queue


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        q = []
        q.append(root)
        ret = []
        while q:
            size = len(q)
            tmp = []
            for _ in range(size):
                head = q.pop(0)
                tmp.append(head.val)
                if head.left:
                    q.append(head.left)
                if head.right:
                    q.append(head.right)
            ret.append(tmp)
        return ret
