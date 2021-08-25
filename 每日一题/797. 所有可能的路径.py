# https://leetcode-cn.com/problems/all-paths-from-source-to-target/
from typing import List


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        path_ans = []
        n = len(graph)

        def dfs(nxt: int, p: List[int]):
            p.append(nxt)
            if nxt == n-1:
                path_ans.append(p[:])
                return
            for node in graph[nxt]:
                if node not in p:
                    dfs(node, p)
                    p.pop()

        dfs(0, [])
        return path_ans


x = Solution()
print(x.allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))
