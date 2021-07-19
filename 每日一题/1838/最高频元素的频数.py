from typing import List
import math


class Solution:

    def maxFrequency(self, nums: List[int], k: int) -> int:
        # 前缀和+二分+滑动窗口
        n = len(nums)
        nums.sort()
        sum = [0]*(n+1)
        # 前缀和计算和，用来判断是否超过k次递增
        for i in range(1, n+1):
            sum[i] = sum[i-1]+nums[i-1]
        l, r = 0, n
        # 二分，目标是len
        while l < r:
            mid = math.floor((l+r+1)/2)
            if self.check(mid, sum, k, n, nums):
                l = mid
            else:
                r = mid-1
        return r

    def check(self, len: int, sum: List[int], k: int, n: int, nums: List[int]) -> bool:
        # 滑动窗口，len不变,l和r进行移动
        for l in range(0, n+1-len):
            r = l+len-1
            # 前缀和计算和
            cur = sum[r+1]-sum[l]
            # 最终子数组中会全部变成nums[r]
            t = nums[r]*len
            # 判断k次递增是否满足
            if t-cur <= k:
                return True
        return False


x = Solution()
x.maxFrequency([2, 1, 4], 5)
