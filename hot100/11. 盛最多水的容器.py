# https://leetcode-cn.com/problems/container-with-most-water/
from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height)-1
        ret = 0
        while l < r:
            short = min(height[l], height[r])
            V = (r-l)*short
            ret = max(V, ret)
            if short == height[l]:
                l += 1
            if short == height[r]:
                r -= 1
        return ret
