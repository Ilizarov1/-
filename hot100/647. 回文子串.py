# https://leetcode-cn.com/problems/palindromic-substrings/
class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [[False]*n for _ in range(n)]
        ret = 0
        for i in range(n-1, -1, -1):
            for j in range(i, n):
                if s[i] == s[j]:
                    if i == j or j-i == 1:
                        dp[i][j] = True
                        ret += 1
                    elif dp[i+1][j-1]:
                        dp[i][j] = True
                        ret += 1
        return ret
