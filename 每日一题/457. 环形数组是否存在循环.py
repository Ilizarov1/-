# https://leetcode-cn.com/problems/circular-array-loop/
from typing import List


class Solution:
    def circularArrayLoop(self, nums: List[int]) -> bool:
        def next_step(i: int, length: int):
            return (i+nums[i]+length) % length
        n = len(nums)
        for i in range(n):
            slow = i
            fast = next_step(slow, n)
            while nums[fast]*nums[i] > 0 and nums[next_step(fast, n)]*nums[i] > 0:
                if fast == slow:
                    if slow == next_step(slow, n):
                        break
                    return True
                slow = next_step(slow, n)
                fast = next_step(next_step(fast, n), n)
        return False
