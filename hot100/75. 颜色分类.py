# https://leetcode-cn.com/problems/sort-colors/
from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        p0, p2, idx = 0, n-1, 0
        while idx <= p2:
            while idx <= p2 and nums[idx] == 2:
                nums[idx], nums[p2] = nums[p2], nums[idx]
                p2 -= 1
            if nums[idx] == 0:
                nums[idx], nums[p0] = nums[p0], nums[idx]
                p0 += 1
            idx += 1


x = Solution()
print(x.sortColors([2, 0, 2, 1, 1, 0], 1))
