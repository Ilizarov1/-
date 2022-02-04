# https://leetcode-cn.com/problems/number-of-rectangles-that-can-form-the-largest-square/
from typing import List


class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        max_len = 0
        ret = 0
        for rect in rectangles:
            if min(rect) > max_len:
                max_len = min(rect)
        for rect in rectangles:
            if min(rect) == max_len:
                ret += 1
        return ret
