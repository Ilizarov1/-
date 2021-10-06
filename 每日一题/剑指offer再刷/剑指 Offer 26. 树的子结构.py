# https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def recur(A: TreeNode, B: TreeNode) -> bool:
            if not B:
                return True
            if not A:
                return False
            if A.val != B.val:
                return False
            return recur(A.left, B.left) and recur(A.right, B.right)

        if (not A) or (not B):
            return False
        return recur(A, B) or self.isSubStructure(A.left, B) or self.isSubStructure(A.right, B)
