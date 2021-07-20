import math
from typing import List

# https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/


class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        # 贪心，尽量将较小数和较大数组成数对会使得最大值最小
        nums.sort()
        n = len(nums)
        left, right = 0, n-1
        ans = nums[0]+nums[n-1]
        while left < right:
            ans = max(ans, nums[left]+nums[right])
            left += 1
            right -= 1
        return ans
