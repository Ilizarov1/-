# https://leetcode-cn.com/problems/single-number/
from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ret = 0
        for n in nums:
            ret = ret ^ n
        return ret
