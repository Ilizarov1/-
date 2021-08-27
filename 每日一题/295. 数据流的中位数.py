# https://leetcode-cn.com/problems/find-median-from-data-stream/
import heapq


class MedianFinder:

    def __init__(self):
        self.l_PQ = []
        self.r_PQ = []

    def addNum(self, num: int) -> None:
        size_l = len(self.l_PQ)
        size_r = len(self.r_PQ)
        if size_r == size_l:
            if size_r == 0:
                heapq.heappush(self.l_PQ, -num)
            else:
                if num <= self.r_PQ[0]:
                    heapq.heappush(self.l_PQ, -num)
                else:
                    heapq.heappush(self.l_PQ, -heapq.heappop(self.r_PQ))
                    heapq.heappush(self.r_PQ, num)
        else:
            if num >= -self.l_PQ[0]:
                heapq.heappush(self.r_PQ, num)
            else:
                heapq.heappush(self.r_PQ, -heapq.heappop(self.l_PQ))
                heapq.heappush(self.l_PQ, -num)

    def findMedian(self) -> float:
        size_l = len(self.l_PQ)
        size_r = len(self.r_PQ)
        ans = 0
        if size_r == size_l:
            l = -self.l_PQ[0]
            r = self.r_PQ[0]
            ans = (l+r)/2
        else:
            ans = -self.l_PQ[0]
        return ans
        # Your MedianFinder object will be instantiated and called as such:
        # obj = MedianFinder()
        # obj.addNum(num)
        # param_2 = obj.findMedian()


x = MedianFinder()
x.addNum(1)
x.addNum(2)
print(x.findMedian())
x.addNum(3)
print(x.findMedian())
