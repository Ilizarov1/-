# https://leetcode-cn.com/problems/running-sum-of-1d-array/
from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        ans = [nums[0]]
        n = len(nums)
        for i in range(1, n):
            ans.append(ans[i-1]+nums[i])
        return ans


x = Solution()
print(x.runningSum([1, 2, 3, 4]))
