# https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
from typing import List
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
        ans = []

        def recur(cur: TreeNode, rest: int, tmp: List[int]):
            if not cur:
                return
            rest -= cur.val
            tmp.append(cur.val)
            if rest == 0 and not cur.left and not cur.right:
                ans.append(tmp)
                return
            recur(cur.left, rest, tmp[:])
            recur(cur.right, rest, tmp[:])
        recur(root, target, [])
        return ans


x = Solution()
root = TreeNode(-2)
right = TreeNode(-3)
root.right = right
print(x.pathSum(root, -5))
