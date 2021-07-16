from typing import List
import math


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)-1
        if r < 0:
            return 0
        a = -1
        b = -1
        # 二分右边界
        while l < r:
            mid = math.floor((l+r+1)/2)
            if target >= nums[mid]:
                l = mid
            else:
                r = mid-1
        if nums[r] != target:
            return 0
        b = r
        l = 0
        r = len(nums)-1
        # 二分左边界
        while l < r:
            mid = math.floor((l+r)/2)
            if target <= nums[mid]:
                r = mid
            else:
                l = mid+1
        if nums[r] != target:
            return 0
        a = r
        return b-a+1


if __name__ == '__main__':
    x = Solution()
    print(x.search([5, 7, 7, 8, 8, 10], 8))
