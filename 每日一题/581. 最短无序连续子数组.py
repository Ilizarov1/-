# https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
from typing import List


class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        sorted_lst = sorted(nums)
        i, j = 0, n-1
        # 寻找切分点
        while i <= j and nums[i] == sorted_lst[i]:
            i += 1
        while i <= j and nums[j] == sorted_lst[j]:
            j -= 1
        return j-i+1
