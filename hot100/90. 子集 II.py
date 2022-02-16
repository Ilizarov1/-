# https://leetcode-cn.com/problems/subsets-ii/
from typing import List


class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        ret = []
        n = len(nums)
        nums.sort()

        def backtrack(sub: List[int], start: int):
            ret.append(sub)
            for i in range(start, n):
                if i > start and nums[i] == nums[i-1]:
                    continue
                backtrack(sub+[nums[i]], i+1)

        backtrack([], 0)

        return ret


x = Solution()
print(x.subsetsWithDup([1, 2, 2]))
