# https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/
from collections import defaultdict
from typing import List


class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        l1 = s1.split(' ')
        l2 = s2.split(' ')
        ret = []
        cnt = defaultdict(int)
        for w in l1:
            cnt[w] += 1
        for w in l2:
            cnt[w] += 1
        for k, v in cnt.items():
            if v == 1:
                ret.append(k)
        return ret
