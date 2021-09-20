# https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
import collections


class Solution:
    def numWays(self, n: int) -> int:
        mem = collections.defaultdict(int)
        mod = 1000000007

        def recur(n: int):
            ans = 0
            if n == 0:
                return 1
            if n == 1:
                return 1
            if n == 2:
                return 2
            if mem[n-1] == 0:
                mem[n-1] = recur(n-1)
            if mem[n-2] == 0:
                mem[n-2] = recur(n-2)
            ans += mem[n-1]
            ans += mem[n-2]
            return ans % mod
        return recur(n)


x = Solution()
print(x.numWays(7))
