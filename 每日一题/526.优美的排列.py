# https://leetcode-cn.com/problems/beautiful-arrangement/
import collections
from functools import lru_cache
from typing import List


class Solution:
    def countArrangement(self, n: int) -> int:
        @lru_cache(None)
        def dfs(i: int, visited: int):
            if i > n:
                return 1
            ans = 0
            for j in range(1, n+1):
                if ((1 << j) & visited) == 0 and (j % i == 0 or i % j == 0):
                    ans += dfs(i+1, (1 << j) | visited)

            return ans
        return dfs(1, 0)


x = Solution()
print(x.countArrangement(2))
