# https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
class Solution:
    def translateNum(self, num: int) -> int:
        s = str(num)
        dp = [0 for i in range(len(s)+1)]
        dp[0], dp[1] = 1, 1
        for i in range(2, len(s)+1):
            tmp = 10*int(s[i-2])+int(s[i-1])
            if tmp >= 10 and tmp <= 25:
                dp[i] = dp[i-1]+dp[i-2]
            else:
                dp[i] = dp[i-1]
        return dp[len(s)]
