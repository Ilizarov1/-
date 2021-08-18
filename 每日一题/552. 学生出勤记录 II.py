# https://leetcode-cn.com/problems/student-attendance-record-ii/
from functools import lru_cache
from typing import List


class Solution:
    def checkRecord(self, n: int) -> int:
        mod = 10**9+7
        # 记忆化

        # memo = [[[0 for i in range(3)] for i in range(2)] for i in range(n)]

        # def dfs(day: int, absent: int, late: int, memo):
        #     ans = 0
        #     if day >= n:
        #         return 1
        #     if memo[day][absent][late] != 0:
        #         return memo[day][absent][late]
        #     # Present随便放
        #     ans += dfs(day+1, absent, 0, memo) % mod
        #     # Absent只能放一个
        #     if absent < 1:
        #         ans += dfs(day+1, 1, 0, memo) % mod
        #     # Late不能连续超过3个
        #     if late < 2:
        #         ans += dfs(day+1, absent, late+1, memo) % mod
        #     ans %= mod
        #     memo[day][absent][late] = ans
        #     return ans
        # return dfs(0, 0, 0, memo)

        # dp
        dp = [[[0 for i in range(3)] for i in range(2)] for i in range(n)]
        # 初始化
        dp[0][0][0] = 1
        dp[0][1][0] = 1
        dp[0][0][1] = 1
        for i in range(1, n):
            # 放p
            # 0个a
            dp[i][0][0] = (dp[i-1][0][0]+dp[i-1][0][1]+dp[i-1][0][2]) % mod
            # 1个a
            dp[i][1][0] = (dp[i-1][1][0]+dp[i-1][1][1]+dp[i-1][1][2]) % mod

            # 放a
            dp[i][1][0] += (dp[i-1][0][0]+dp[i-1][0][1]+dp[i-1][0][2]) % mod

            # 放l
            dp[i][0][1] = dp[i-1][0][0]
            dp[i][0][2] = dp[i-1][0][1]
            dp[i][1][1] = dp[i-1][1][0]
            dp[i][1][2] = dp[i-1][1][1]
        ans = 0
        for i in range(2):
            for j in range(3):
                ans = (ans + dp[n-1][i][j]) % mod
        return ans


x = Solution()
print(x.checkRecord(10101))
