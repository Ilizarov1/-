# https://leetcode-cn.com/problems/longest-consecutive-sequence/
from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        longest = 0
        for n in nums_set:
            if n - 1 not in nums_set:
                cur_num = n
                cur_len = 1

                while cur_num + 1 in nums_set:
                    cur_num += 1
                    cur_len += 1

                longest = max(cur_len, longest)
        return longest
