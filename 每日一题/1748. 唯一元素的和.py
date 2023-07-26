# https://leetcode-cn.com/problems/sum-of-unique-elements/
from typing import List


class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        cnt = [0 for i in range(101)]
        for n in nums:
            cnt[n] += 1
        ret = 0
        for i in range(101):
            if cnt[i] == 1:
                ret += i
        return ret
