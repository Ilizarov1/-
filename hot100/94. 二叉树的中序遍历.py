# https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        ret = []

        def inorder(root: TreeNode):
            if root.left:
                inorder(root.left)
            if root:
                ret.append(root.val)
            if root.right:
                inorder(root.right)
        if root:
            inorder(root)
        return ret
