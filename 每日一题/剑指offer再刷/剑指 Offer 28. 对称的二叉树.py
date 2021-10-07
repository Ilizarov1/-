# https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def recur(L: TreeNode, R: TreeNode):
            if L == None and R == None:
                return True
            elif L == None or R == None:
                return False
            else:
                if R.val != L.val:
                    return False
            return recur(L.left, R.right) and recur(L.right, R.left)
        return recur(root.left, root.right) if root else True
