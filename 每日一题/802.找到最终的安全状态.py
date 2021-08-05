# https://leetcode-cn.com/problems/find-eventual-safe-states/
from collections import defaultdict
from typing import Collection, List


class Solution:
    # dfs
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)
        visited = set()
        ans = []

        # 安全返回TRUE,否则返回FALSE
        def dfs(i: int):
            if i in visited:
                return False
            visited.add(i)
            for neighbor in graph[i]:
                if not dfs(neighbor):
                    return False
            graph[i] = []
            visited.remove(i)
            return True

        for i in range(n):
            if dfs(i):
                ans.append(i)
        return ans


x = Solution()
print(x.eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]))
