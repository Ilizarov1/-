# https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
from typing import List
import collections


class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        hashmap = collections.defaultdict(int)
        for num in nums:
            if hashmap[num] >= 1:
                return num
            else:
                hashmap[num] += 1
        return -1

    # 交换索引位置，形成nums[x]=x,如果再次满足nums[x]=x则重复
    def bestSolution(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums):
            if nums[i] == i:
                i += 1
                continue
            if nums[nums[i]] == nums[i]:
                return nums[i]
            else:
                nums[nums[i]], nums[i] = nums[i], nums[nums[i]]
        return -1
