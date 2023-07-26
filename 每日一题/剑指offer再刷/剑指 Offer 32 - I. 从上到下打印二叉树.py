# https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
# Definition for a binary tree node.
from typing import List


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
# BFS


class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        ans = []
        q = []
        q.append(root)
        while q:
            p = q.pop(0)
            if p:
                ans.append(p.val)
                q.append(p.left)
                q.append(p.right)
        return ans
