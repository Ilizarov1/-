# https://leetcode-cn.com/problems/subsets/
from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        ret = []
        n = len(nums)

        def backtrack(path: List[int], start: int):
            ret.append(path)
            for i in range(start, n):
                backtrack(path+[nums[i]], i+1)

        backtrack([], 0)
        return ret


x = Solution()
print(x.subsets([1, 2, 3]))
