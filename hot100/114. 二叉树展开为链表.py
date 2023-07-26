# https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root:
            return
        cur = root
        while cur:
            nxt = cur.left
            cur.left = None
            if nxt:
                ptr = nxt
                while ptr.right:
                    ptr = ptr.right
                ptr.right = cur.right
                cur.right = nxt
            cur = cur.right


root1 = TreeNode(1)
root2 = TreeNode(2)
root3 = TreeNode(3)
root4 = TreeNode(4)
root5 = TreeNode(5)
root6 = TreeNode(6)
root1.left = root2
root1.right = root5
root2.left = root3
root2.right = root4
root5.left = root6
x = Solution()
print(x.flatten(root1))
