# https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

# 滑动窗口
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = len(s)
        hm = {}
        start = 0
        ret = 0
        for end in range(length):
            w = s[end]
            if w in hm:
                # 更新起始索引,如果重复的字符在start之前就不进行更新
                start = max(hm[w] + 1, start)
                hm[w] = end
            else:
                hm[w] = end
            ret = max(ret, end - start + 1)
            # print(s[start:end+1])
        return ret


x = Solution()
print(x.lengthOfLongestSubstring("pwwkew"))
