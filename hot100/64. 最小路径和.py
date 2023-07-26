# https://leetcode-cn.com/problems/minimum-path-sum/
import sys
import functools
from typing import List


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        # @functools.lru_cache(None)
        # def dfs(x: int, y: int, cur: int):
        #     if x == m-1 and y == n-1:
        #         return cur+grid[x][y]
        #     if x > m-1 or y > n-1:
        #         return sys.maxsize
        #     cur += grid[x][y]
        #     r = dfs(x+1, y, cur)
        #     d = dfs(x, y+1, cur)
        #     return min(r, d)

        # return dfs(0, 0, 0)

        dp = [[0]*n for i in range(m)]
        dp[0][0] = grid[0][0]
        for i in range(1, m):
            dp[i][0] = dp[i-1][0]+grid[i][0]
        for j in range(1, n):
            dp[0][j] = dp[0][j-1]+grid[0][j]
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] += (min(dp[i-1][j], dp[i][j-1])+grid[i][j])
        return dp[m-1][n-1]


x = Solution()
print(x.minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
