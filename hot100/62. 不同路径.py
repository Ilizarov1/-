# https://leetcode-cn.com/problems/unique-paths/
from functools import lru_cache
import math


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # dfs
        # ret = 0

        # @lru_cache(None)
        # def dfs(x: int, y: int):
        #     if x == n - 1 and y == m - 1:
        #         return 1
        #     elif x > n - 1 or y > m - 1:
        #         return 0
        #     ret = 0
        #     ret += dfs(x+1, y)
        #     ret += dfs(x, y+1)
        #     return ret

        # ret = dfs(0, 0)
        # return ret

        # dp
        # dp = [[0]*n for i in range(m)]
        # # 设置边界条件
        # for i in range(n):
        #     dp[0][i] = 1
        # for i in range(m):
        #     dp[i][0] = 1
        # for i in range(1, m):
        #     for j in range(1, n):
        #         dp[i][j] += dp[i-1][j] + dp[i][j-1]
        # return dp[m-1][n-1]

        # 组合数学
        # C(m+n-2,n-1)
        # return math.comb(m+n-2, n-1)
        x, y = n, 1
        ret = 1
        while y < m:
            ret = ret * x // y
            x += 1
            y += 1
        return ret
