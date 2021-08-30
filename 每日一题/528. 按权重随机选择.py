# https://leetcode-cn.com/problems/random-pick-with-weight/
from typing import List
import random


class Solution:
    rd = random

    def __init__(self, w: List[int]):
        # 计算前缀和
        self.n = len(w)
        self.preSum = [0 for i in range(self.n)]
        self.preSum[0] = w[0]
        for i in range(1, self.n):
            self.preSum[i] = self.preSum[i-1]+w[i]

    def pickIndex(self) -> int:
        maximum = self.preSum[len(self.preSum)-1]
        # 取一个随机数
        t = self.rd.randint(1, maximum)

        def binarySearch():
            l, r = 0, self.n-1
            while l < r:
                mid = (l+r)//2
                if t <= self.preSum[mid]:
                    r = mid
                else:
                    l = mid+1
            return r
        return binarySearch()
        # Your Solution object will be instantiated and called as such:
        # obj = Solution(w)
        # param_1 = obj.pickIndex()


x = Solution([1])
print(x.pickIndex())
