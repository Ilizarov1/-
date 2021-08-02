# https://leetcode-cn.com/problems/network-delay-time/
import collections
from typing import DefaultDict, List
import sys

# 朴素dijkstra寻找单源最短路径


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = collections.defaultdict(set)
        weight = [[0 for i in range(n+1)] for j in range(n+1)]
        visited = {k}
        dist = collections.defaultdict(lambda: sys.maxsize)

        def dijkstra(dist: dict, graph: dict, weight: dict, visited: set):
            for i in range(n-1):
                min_dist = [0, sys.maxsize]
                for key, val in dist.items():
                    if (key not in visited) and val < min_dist[1]:
                        min_dist = [key, val]
                j = min_dist[0]
                dist_j = min_dist[1]
                visited.add(j)
                for node in graph[j]:
                    if node not in visited:
                        if dist_j+weight[j][node] < dist[node]:
                            dist[node] = dist_j+weight[j][node]

        for t in times:
            graph[t[0]].add(t[1])
            weight[t[0]][t[1]] = t[2]
        for node in graph[k]:
            dist[node] = weight[k][node]
        dijkstra(dist, graph, weight, visited)
        ans = [-1]*(n+1)
        for i in range(1, n+1):
            if i == k:
                ans[i] = 0
            else:
                ans[i] = dist[i]
        # 求所有最短路径的最大值
        max_ans = max(ans)
        return max_ans if max_ans != sys.maxsize else -1


x = Solution()
print(x.networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 1))
