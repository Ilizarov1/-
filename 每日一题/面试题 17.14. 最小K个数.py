# https://leetcode-cn.com/problems/smallest-k-lcci/
from typing import List
import heapq


class Solution:
    def smallestK(self, arr: List[int], k: int) -> List[int]:
        heapq.heapify(arr)
        ans = []
        while k:
            ans.append(heapq.heappop(arr))
            k -= 1
        return ans
