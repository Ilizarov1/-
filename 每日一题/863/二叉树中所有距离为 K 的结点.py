# https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/

from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    # N = 1010
    # M = N*2
    # head = [-1]*N
    # end = [0]*M
    # near = [0]*M
    # visited = [False]*N
    # idx = 0

    # def add(self, a: int, b: int):
    #     self.end[self.idx] = b
    #     self.near[self.idx] = self.head[a]
    #     self.head[a] = self.idx
    #     self.idx += 1

    # def dfs(self, root: TreeNode):
    #     if root == None:
    #         return
    #     if root.left != None:
    #         self.add(root.val, root.left.val)
    #         self.add(root.left.val, root.val)
    #         self.dfs(root.left)
    #     if root.right != None:
    #         self.add(root.val, root.right.val)
    #         self.add(root.right.val, root.val)
    #         self.dfs(root.right)

    # def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
    #     ans = []
    #     self.dfs(root)
    #     queue = []
    #     queue.append(target.val)
    #     self.visited[target.val] = True
    #     while len(queue) != 0 and k >= 0:
    #         size = len(queue)
    #         while size > 0:
    #             size -= 1
    #             p = queue.pop(0)
    #             if k == 0:
    #                 ans.append(p)
    #                 continue
    #             i = self.head[p]
    #             while i != -1:
    #                 j = self.end[i]
    #                 if not self.visited[j]:
    #                     queue.append(j)
    #                     self.visited[j] = True
    #                 i = self.near[i]
    #         k = k-1
    #     return ans

    # dfs 建图,bfs搜索
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        from collections import defaultdict
        graph = defaultdict(set)

        def dfs(root: TreeNode):
            if root == None:
                return
            if root.left:
                graph[root.val].add(root.left.val)
                graph[root.left.val].add(root.val)
                dfs(root.left)
            if root.right:
                graph[root.val].add(root.right.val)
                graph[root.right.val].add(root.val)
                dfs(root.right)
        dfs(root)
        cur = [target.val]
        visited = {target.val}
        while k:
            next_time = []
            while cur:
                tmp = cur.pop()
                for node in graph[tmp]:
                    if node not in visited:
                        visited.add(node)
                        next_time.append(node)
            k -= 1
            cur = next_time
        return cur


root = TreeNode(0)
node1 = TreeNode(1)
node2 = TreeNode(2)
node3 = TreeNode(3)
root.left = node1
root.right = node3
node1.right = node2
x = Solution()

print(x.distanceK(root, node1, 2))
