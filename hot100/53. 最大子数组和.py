# https://leetcode-cn.com/problems/maximum-subarray/
import sys
from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        pre = - sys.maxsize
        ret = pre
        for n in nums:
            pre = max(pre+n, n)
            if pre > ret:
                ret = pre
        return ret


x = Solution()
print(x.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
