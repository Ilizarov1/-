# https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
# Definition for a binary tree node.
from typing import List


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        dic = {}
        for i in range(len(inorder)):
            dic[inorder[i]] = i

        def recur(root, left, right):
            if left > right:
                return
            node = TreeNode(preorder[root])
            i = dic[preorder[root]]
            node.left = recur(root+1, left, i-1)
            # preorder[root,left_root,---,right_root,---]
            # inorder[left|root|right]
            # right_root=root+1+len(left)=root+1+i-left
            node.right = recur(i-left+root+1, i+1, right)
            return node
        return recur(0, 0, len(inorder)-1)
