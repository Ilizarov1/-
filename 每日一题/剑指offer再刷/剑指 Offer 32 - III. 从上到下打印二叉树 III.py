# https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
from typing import List
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        q = [root]
        tmp = []
        ans = []
        j = 0
        while q:
            n = len(q)
            for i in range(n):
                p = q.pop(0)
                tmp.append(p.val)
                if p.left:
                    q.append(p.left)
                if p.right:
                    q.append(p.right)
                if i == n-1:
                    if j % 2 == 1:
                        tmp.reverse()
                    ans.append(tmp)
                    tmp = []
                    j += 1
        return ans


x = Solution()
root = TreeNode(1)
n2 = TreeNode(2)
n3 = TreeNode(3)
n4 = TreeNode(4)
n5 = TreeNode(5)
root.left = n2
root.right = n3
n2.left = n4
n3.right = n5
print(x.levelOrder(root))
