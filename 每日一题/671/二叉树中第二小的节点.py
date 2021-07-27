# https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    ans = -1

    def findSecondMinimumValue(self, root: TreeNode) -> int:
        self.dfs(root, root.val)
        return self.ans

    def dfs(self, root: TreeNode, cur: int):
        if root == None:
            return
        if(root.val != cur):
            if self.ans == -1:
                self.ans = root.val
            else:
                self.ans = min(root.val, self.ans)
            return
        self.dfs(root.left, cur)
        self.dfs(root.right, cur)
