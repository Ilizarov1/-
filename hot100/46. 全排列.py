# https://leetcode-cn.com/problems/permutations/
from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        ret = []

        def dfs(idx, path):
            if len(path) == n:
                ret.append(path)
                return
            for i in range(n):
                if nums[i] not in path:
                    dfs(i, path+[nums[i]])
        for i in range(n):
            dfs(i, [nums[i]])
        return ret


x = Solution()
print(x.permute([1, 2, 3]))
