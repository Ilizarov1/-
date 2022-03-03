# https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
import math
import random
from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def partition(nums: List[int], left: int, right: int) -> int:
            if right > left:
                randomIndex = random.randint(left, right)
                nums[left], nums[randomIndex] = nums[randomIndex], nums[left]
            pivot = nums[left]
            j = left
            for i in range(left, right+1):
                if nums[i] < pivot:
                    j += 1
                    nums[j], nums[i] = nums[i], nums[j]
            nums[j], nums[left] = nums[left], nums[j]
            return j

        numLen = len(nums)
        target = numLen - k
        if target > numLen/2:
            return nums[target]
        left, right = 0, numLen-1
        while True:
            idx = partition(nums, left, right)
            if idx < target:
                left = idx + 1
            elif idx > target:
                right = idx - 1
            else:
                return nums[idx]


x = Solution()
print(x.findKthLargest([2, 1], 2))
