# https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
from functools import lru_cache


class Solution:
    mod = 1000000007

    @lru_cache(None)
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        return (self.fib(n-1)+self.fib(n-2)) % self.mod
