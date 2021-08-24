# https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/
from typing import List
import collections
from queue import Queue


class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        inf = 10**5+7
        # k-> k+2:把边转化为步数更方便
        # dp[i][k] = min(dp[j][k-1] + price), j 为 i 的上一个节点
        # 从 dst 出发，往回回溯
        dp = [[inf for i in range(k+2)] for i in range(n)]
        dp[dst][0] = 0
        for j in range(1, k+2):
            for [start, end, price] in flights:
                dp[start][j] = min(dp[start][j], dp[end][j-1]+price)
        ans = min(dp[src])
        return ans if ans < inf else -1
