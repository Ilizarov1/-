# https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
from operator import xor
from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums)-1
        while lo < hi:
            mid = (lo+hi) // 2
            if (nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid]):
                lo = mid+1
            else:
                hi = mid
        if lo == hi and nums[lo] == target:
            return lo
        else:
            return -1
