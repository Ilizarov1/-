# https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
class Solution:
    def cuttingRope(self, n: int) -> int:
        dp = [0 for i in range(n+1)]
        dp[2] = 1
        for i in range(3, n+1):
            for j in range(2, i):
                dp[i] = max(dp[i], dp[i-j]*j, j*(i-j))
        return dp[n]
