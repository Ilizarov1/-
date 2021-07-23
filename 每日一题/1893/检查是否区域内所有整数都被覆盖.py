from typing import List

# https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered/


class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        arr = [0]*51
        flag = True
        for i in ranges:
            l, r = i[0], i[1]
            for x in range(l, r+1):
                arr[x] = 1
        for i in range(left, right+1):
            if arr[i] == 0:
                flag = False
        return flag


x = Solution()
x.isCovered([[1, 50]], 1, 50)
