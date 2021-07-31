# https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/

# Definition for a binary tree node.
from collections import defaultdict
from typing import DefaultDict, List
import functools


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        hashmap = defaultdict(list)

        def dfs(root: TreeNode, row: int, col: int):
            if root:
                hashmap[col].append([row, root.val])
            if root.left:
                dfs(root.left, row+1, col-1)
            if root.right:
                dfs(root.right, row+1, col+1)
        dfs(root, 0, 0)

        def comp(a: List[int], b: List[int]):
            if a[0] != b[0]:
                return a[0]-b[0]
            else:
                return a[1]-b[1]

        ans = []
        # print(hashmap)
        # print(sorted(hashmap))
        for i in sorted(hashmap):
            tmp = []
            for j in sorted(hashmap[i], key=functools.cmp_to_key(comp)):
                tmp.append(j[1])
            ans.append(tmp)
        return ans


x = Solution()
node1 = TreeNode(0)
x.verticalTraversal(node1)
