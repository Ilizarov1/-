# https://leetcode-cn.com/problems/combination-sum/
import functools
from typing import List


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ret = []
        size = len(candidates)
        if size == 0:
            return []

        def dfs(begin, target, path):
            if target < 0:
                return
            if target == 0:
                ret.append(path)
                return
            for idx in range(begin, size):
                dfs(idx, target - candidates[idx], path+[candidates[idx]])
        dfs(0, target, [])
        return ret
