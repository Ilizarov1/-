# https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
# Definition for a binary tree node.
from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder:
            return None
        root = preorder[0]
        root_node = TreeNode(root)
        root_idx = inorder.index(root)
        left_in = inorder[:root_idx]
        left_len = len(left_in)
        right_in = inorder[root_idx+1:]
        # right_len = len(right_in)
        left_node = self.buildTree(preorder[1:1+left_len], left_in)
        right_node = self.buildTree(preorder[1+left_len:], right_in)
        root_node.left = left_node
        root_node.right = right_node
        return root_node
