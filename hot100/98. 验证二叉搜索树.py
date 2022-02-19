# https://leetcode-cn.com/problems/validate-binary-search-tree/
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        order = []

        def inorder(root: TreeNode):

            if root.left:
                inorder(root.left)
            if root:
                order.append(root.val)
            if root.right:
                inorder(root.right)

        inorder(root)
        ret = True
        for i in range(1, len(order)):
            if order[i] <= order[i-1]:
                ret = False
                break
        return ret


root1 = TreeNode(1)
root5 = TreeNode(5)
root4 = TreeNode(4)
root3 = TreeNode(3)
root6 = TreeNode(6)
root5.left = root1
root5.right = root4
root4.left = root3
root4.right = root6
x = Solution()
print(x.isValidBST(root5))
