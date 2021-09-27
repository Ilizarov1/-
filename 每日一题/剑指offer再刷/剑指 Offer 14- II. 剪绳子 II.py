# https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
class Solution:
    def cuttingRope(self, n: int) -> int:
        if n == 2:
            return 1
        if n == 3:
            return 2
        t = n//3
        mod = 1000000007
        rest = n-t*3
        if rest != 0:
            res = max((3**t)*rest, (3**(t-1))*(3+rest))
        else:
            res = 3**t
        return res % mod
