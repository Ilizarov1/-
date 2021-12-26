# https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = len(s)
        hm = {}
        start = 0
        ret = 0
        for end in range(length):
            w = s[end]
            if w in hm:
                start = max(hm[w] + 1, start)
                hm[w] = end
            else:
                hm[w] = end
            ret = max(ret, end - start + 1)
            # print(s[start:end+1])
        return ret


x = Solution()
print(x.lengthOfLongestSubstring("pwwkew"))
