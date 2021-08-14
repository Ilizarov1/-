# https://leetcode-cn.com/problems/count-unhappy-friends/
from typing import List
import collections


class Solution:
    def unhappyFriends(self, n: int, preferences: List[List[int]], pairs: List[List[int]]) -> int:
        pmap = collections.defaultdict(dict)
        ans = 0
        for i in range(n):
            pmap[i] = collections.defaultdict(int)
            n_2 = len(preferences[i])
            for j in range(n_2):
                pmap[i][preferences[i][j]] = n_2-j
        m = len(pairs)

        def check(x, y, u, v):
            xmap, ymap, umap, vmap = pmap[x], pmap[y], pmap[u], pmap[v]
            if xmap[u] > xmap[y] and umap[x] > umap[v]:
                return True
            if xmap[v] > xmap[y] and vmap[x] > vmap[u]:
                return True
            return False
        for i in range(m):
            x, y = pairs[i][0], pairs[i][1]
            xok, yok = False, False
            for j in range(m):
                if i == j:
                    continue
                u, v = pairs[j][0], pairs[j][1]
                if not xok:
                    xok = check(x, y, u, v)
                if not yok:
                    yok = check(y, x, u, v)
            if xok:
                ans += 1
            if yok:
                ans += 1
        return ans
