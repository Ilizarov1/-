# https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        s_cnt = [0]*26
        p_cnt = [0]*26
        ret = []
        m, n = len(p), len(s)
        if m > n:
            return ret
        for idx in range(m):
            s_cnt[ord(s[idx])-ord('a')] += 1
            p_cnt[ord(p[idx])-ord('a')] += 1
        if p_cnt == s_cnt:
            ret.append(0)

        for idx in range(m, n):
            s_cnt[ord(s[idx-m])-ord('a')] -= 1
            s_cnt[ord(s[idx])-ord('a')] += 1
            if s_cnt == p_cnt:
                ret.append(idx - m + 1)
        return ret


x = Solution()
print(x.findAnagrams(s="cbaebabacd", p="abc"))

# initial:
#   异位词想到了编码，想到了素数
# something wrong:
#   没想到滑动窗口，没想到py数组可以直接比较
# something better:
#   滑动窗口 + 数组
