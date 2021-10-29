# https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
from typing import List
from queue import PriorityQueue


class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        ans = []
        PQ = PriorityQueue()
        for n in arr:
            PQ.put(n)
        while k:
            ans.append(PQ.get())
            k -= 1
        return ans
