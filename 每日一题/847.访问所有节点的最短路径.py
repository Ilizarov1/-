# https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/
from typing import Deque, List
import collections


class Solution:
    # bfs
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)
        # (u,mask,dist),利用整数的每一个位来标记访问
        # 同时从多个顶点进行bfs，表示从任一结点开始
        q = collections.deque((i, 1 << i, 0) for i in range(n))
        seen = {(i, 1 << i) for i in range(n)}
        # 使用(u,mask)记录访问情况
        ans = 0

        while q:
            # u:当前结点
            # mask:每一位用来标记是否经过
            # dist:表示到当前结点经过的路径长度
            u, mask, dist = q.popleft()
            # 搜索结束条件是访问所有的结点
            if mask == (1 << n) - 1:
                ans = dist
                break
            # 搜索相邻的节点
            for v in graph[u]:
                # 将 mask 的第 v 位置改为 1,表示从u->v已经访问过
                mask_v = mask | (1 << v)
                if (v, mask_v) not in seen:
                    # 每进行一次访问路径长度+1
                    q.append((v, mask_v, dist + 1))
                    seen.add((v, mask_v))

        return ans


x = Solution()
print(x.shortestPathLength([[1, 2, 3], [0], [0], [0]]))
