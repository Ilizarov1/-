# https://leetcode-cn.com/problems/merge-intervals/
import functools
from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        def cmp(a, b):
            return a[0] - b[0]
        intervals.sort(key=functools.cmp_to_key(cmp))
        merged = [intervals[0]]
        n = len(intervals)
        for idx in range(1, n):

            pre_end = merged[-1][1]

            if intervals[idx][0] <= pre_end:
                if intervals[idx][1] > pre_end:
                    merged[-1][1] = intervals[idx][1]
            else:
                merged.append(intervals[idx])
        return merged
