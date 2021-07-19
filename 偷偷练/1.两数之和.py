from typing import List
import math

# https://leetcode-cn.com/problems/two-sum/


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pos = {}
        ans = []
        for i in range(len(nums)):
            pos[str(nums[i])] = i
        for i in range(len(nums)):
            diff = target-nums[i]
            position = pos.get(str(diff), -1)
            if position != -1 and position != i:
                ans.append(i)
                ans.append(pos.get(str(diff)))
                break
        return ans


x = Solution()
x.twoSum([3, 3], 6)
