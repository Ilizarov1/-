# https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
class Solution:
    def myPow(self, x: float, n: int) -> float:
        res = 1
        if x == 0:
            return 0
        if n < 0:
            x = 1/x
            n = -n
        while n != 0:
            if n & 1:
                res *= x
            x *= x
            n >>= 1
        return res
