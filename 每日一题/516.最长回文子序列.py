# https://leetcode-cn.com/problems/longest-palindromic-subsequence/
class Solution:
    # 区间动态规划，对区间长度进行递推
    # if s[l] != s[r]:
    #   f[l][r] = max{ f[l+1][r], f[l][r-1] }
    # else:
    #   f[l][r] = f[l+1][r-1] + 2
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        f = [[0 for i in range(n)] for i in range(n)]
        for len_t in range(1, n+1):
            l = 0
            while l+len_t-1 < n:
                r = l+len_t-1
                if len_t == 1:
                    f[l][r] = 1
                elif len_t == 2:
                    if s[l] == s[r]:
                        f[l][r] = 2
                    else:
                        f[l][r] = 1
                else:
                    f[l][r] = max(f[l+1][r], f[l][r-1])
                    tmp = 2
                    if s[l] != s[r]:
                        tmp = 0
                    f[l][r] = max(f[l][r], f[l+1][r-1]+tmp)
                l += 1
        return f[0][n-1]


x = Solution()
print(x.longestPalindromeSubseq("bbbab"))
