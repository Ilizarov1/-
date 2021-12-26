# https://leetcode-cn.com/problems/occurrences-after-bigram/
from typing import List


class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        ret = []
        words = text.split(' ')
        if len(words) < 2:
            return ret
        for third in range(2, len(words)):
            w_1, w_2, w_3 = words[third-2], words[third-1], words[third]
            if w_1 == first and w_2 == second:
                ret.append(w_3)
        return ret


x = Solution()
print(x.findOcurrences("alice is a good girl she is a good student", "a", "good"))
