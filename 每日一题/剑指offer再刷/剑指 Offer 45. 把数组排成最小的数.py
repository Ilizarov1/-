# https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
from typing import List
import functools


class Solution:
    def minNumber(self, nums: List[int]) -> str:
        def cmp(x, y):
            a, b = x+y, y+x
            if a > b:
                return 1
            elif a < b:
                return -1
            else:
                return 0
        strs = [str(n) for n in nums]
        strs.sort(key=functools.cmp_to_key(cmp))
        return ''.join(strs)
