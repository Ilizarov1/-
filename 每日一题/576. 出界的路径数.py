# https://leetcode-cn.com/problems/out-of-boundary-paths/
from typing import List
from functools import lru_cache


class Solution:
    mod = 10 ** 9 + 7
    dirc = [(0, 1), (0, -1), (1, 0), (-1, 0)]

    @lru_cache(None)
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        # 出界了
        if startRow < 0 or startRow == m or startColumn < 0 or startColumn == n:
            return 1
        # 没移动次数了
        if not maxMove:
            return 0
        # 向四个方向移动的结果的和
        ans = 0
        for dx, dy in self.dirc:
            ans = (ans + self.findPaths(m, n, maxMove - 1,
                   startRow + dx, startColumn + dy)) % self.mod
        return ans


x = Solution()
print(x.findPaths(1, 3, 3, 0, 1))
