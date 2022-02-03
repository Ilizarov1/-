# https://leetcode-cn.com/problems/jump-game/
from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        max_idx = 0
        for idx in range(n):
            if idx > max_idx:
                return False
            max_idx = max(max_idx, idx+nums[idx])
        return True
