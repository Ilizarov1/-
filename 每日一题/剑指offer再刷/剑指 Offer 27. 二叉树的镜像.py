# https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        def recur(root: TreeNode):
            if root == None:
                return
            recur(root.left)
            recur(root.right)
            tmp = root.left
            root.left = root.right
            root.right = tmp
        recur(root)
        return root
