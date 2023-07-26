# https://leetcode-cn.com/problems/symmetric-tree/
from sqlalchemy import null


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def dfs(left: TreeNode, right: TreeNode):
            if not left and not right:
                return True
            if not left or not right:
                return False
            return left.val == right.val and dfs(left.left, right.right) and dfs(left.right, right.left)
        return dfs(root, root)


root1 = TreeNode(1)
root2_1 = TreeNode(2)
root2_2 = TreeNode(2)
root2_3 = TreeNode(2)
root2_4 = TreeNode(2)

root1.left = root2_1
root1.right = root2_2
root2_1.left = root2_3
root2_2.left = root2_4
x = Solution()
print(x.isSymmetric(root1))
