# https://leetcode-cn.com/problems/longest-nice-substring/
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        def check(s):
            vercel = set()
            for alaphe in s:
                vercel.add(alaphe)
            for alaphe in s:
                if 'a' <= alaphe <= 'z' and (alaphe.upper() not in vercel):
                    return False
                if 'A' <= alaphe <= 'Z' and (alaphe.lower() not in vercel):
                    return False
            return True
        n = len(s)
        ret = ''
        for i in range(n):
            for j in range(i+1, n):
                if j-i+1 > len(ret) and check(s[i:j+1]):
                    ret = s[i:j+1]
        return ret
