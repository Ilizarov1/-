# https://leetcode-cn.com/problems/contains-duplicate-ii/
from typing import List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        s = set()
        for i in range(n):
            if i > k:
                s.remove(nums[i-k-1])
            if nums[i] in s:
                return True
            s.add(nums[i])
        return False
