# https://leetcode-cn.com/problems/corporate-flight-bookings/
from typing import List
import collections


class Solution:
    # 差分，前缀和的逆向过程
    # 对 [l,r] 中所有元素同时 + v
    # 则有 c[l] += v
    #      c[r+1] -= v
    # 最后求前缀和
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        flight = [0 for i in range(n+1)]
        for [start, end, seats] in bookings:
            flight[start-1] += seats
            flight[end] -= seats
        ans = [flight[0]]
        for i in range(1, n):
            ans.append(ans[i-1]+flight[i])
        return ans


x = Solution()
print(x.corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5))
