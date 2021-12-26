# https://leetcode-cn.com/problems/longest-palindromic-substring/
class Solution:
    # def longestPalindrome(self, s: str) -> str:
    #     def isPalindrome(s: str):
    #         stack = s[:]
    #         idx = 0
    #         ret = True
    #         for i in range(len(stack)-1, -1, -1):
    #             if stack[i] != s[idx]:
    #                 ret = False
    #                 break
    #             idx += 1
    #         return ret
    #     max_len = 0
    #     ret = ""
    #     for end in range(len(s)):
    #         for start in range(0, end+1):
    #             if isPalindrome(s[start:end+1]):
    #                 length = end - start + 1
    #                 if length > max_len:
    #                     max_len = length
    #                     ret = s[start:end+1]
    #     return ret
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n < 2:
            return s
        max_len = 1
        start = 0
        dp = [[False] * n for i in range(n)]
        # 初始化
        for i in range(n):
            dp[i][i] = True
        # 枚举长度
        for L in range(2, n+1):
            for left in range(n):
                # L = right - left + 1
                right = L + left - 1
                # 越界
                if right >= n:
                    break
                if s[left] != s[right]:
                    dp[left][right] = False
                else:
                    if right - left < 3:
                        dp[left][right] = True
                    else:
                        # 动态规划
                        dp[left][right] = dp[left+1][right-1]

                if dp[left][right] and L > max_len:
                    max_len = L
                    start = left
        return s[start:start+max_len]


x = Solution()
print(x.longestPalindrome("aba"))
