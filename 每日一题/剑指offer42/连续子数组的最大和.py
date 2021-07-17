from typing import List
import math


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        f, ans = nums[0], nums[0]
        for i in range(1, len(nums)):
            f = max(f+nums[i], nums[i])
            ans = max(f, ans)
        return ans


if __name__ == '__main__':
    x = Solution()
    x.maxSubArray([-2, 1])
