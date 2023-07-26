# https://leetcode-cn.com/problems/product-of-array-except-self/
from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        nums_len = len(nums)
        left = [1]*nums_len
        right = [1]*nums_len
        for i in range(nums_len):
            if i == 0:
                continue
            left[i] = nums[i-1]*left[i-1]
        for i in range(nums_len-1, -1, -1):
            if i == nums_len-1:
                continue
            right[i] = nums[i+1]*right[i+1]
        ret = [1]*nums_len
        for i in range(nums_len):
            ret[i] = left[i]*right[i]
        return ret
