# https://leetcode-cn.com/problems/word-break/
import functools
from typing import List


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # ret = False

        # @functools.lru_cache(None)
        # def dfs(cur: str) -> bool:
        #     if len(cur) > len(s):
        #         return False
        #     if len(cur) == len(s):
        #         if cur != s:
        #             return False
        #         else:
        #             return True
        #     tmp = False
        #     for word in wordDict:
        #         if tmp == True:
        #             break
        #         tmp = tmp or dfs(cur+word)
        #     return tmp

        # for word in wordDict:
        #     if ret == True:
        #         break
        #     ret = ret or dfs(word)
        # return ret
        n = len(s)
        dp = [False]*(n+1)
        dp[0] = True

        for i in range(1, n+1):
            for j in range(0, i):
                if dp[j] and (s[j: i] in wordDict):
                    dp[i] = True
                    break

        return dp[n]


x = Solution()
print(x.wordBreak("abcd",
                  ["a", "abc", "b", "cd"]))
