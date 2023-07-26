# https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
# Definition for a binary tree node.
from typing import List


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        ans = []
        q = [root]
        tmp = []
        while q:
            n = len(q)
            for i in range(n):
                p = q.pop(0)
                if p:
                    tmp.append(p.val)
                    if p.left:
                        q.append(p.left)
                    if p.right:
                        q.append(p.right)
                if i == n-1:
                    ans.append(tmp)
                    tmp = []
        return ans
