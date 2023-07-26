# https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        ans, cnt = nums[0], 1
        for i in range(1, len(nums)):
            if nums[i] != ans:
                cnt -= 1
            else:
                cnt += 1
            if cnt == 0:
                ans = nums[i]
                cnt += 1

        return ans
