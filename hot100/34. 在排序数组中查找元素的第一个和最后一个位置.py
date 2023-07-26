# https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if nums == []:
            return [-1, -1]
        l, r = 0, len(nums)-1
        ret = [-1, -1]
        while l <= r:
            mid = (l+r) // 2
            if nums[mid] == target:
                r = mid - 1
            elif nums[mid] < target:
                l = mid+1
            elif nums[mid] > target:
                r = mid - 1
        if l < len(nums) and nums[l] == target:
            ret[0] = l
        l, r = 0, len(nums)-1
        while l <= r:
            mid = (l+r) // 2
            if nums[mid] == target:
                l = mid + 1
            elif nums[mid] < target:
                l = mid + 1
            elif nums[mid] > target:
                r = mid - 1
        if r >= 0 and nums[r] == target:
            ret[1] = r
        return ret


x = Solution()
print(x.searchRange([1], 1))
