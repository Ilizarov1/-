# https://leetcode-cn.com/problems/minimum-time-difference/
import collections
from typing import List


class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        n = len(timePoints)
        if n >= 1440:
            return 0
        bucket = [0 for i in range(2*1440+60)]
        for p in timePoints:
            ss = p.split(":")
            h, m = int(ss[0]), int(ss[1])
            bucket[h*60+m] += 1
            bucket[h*60+m+1440] += 1
        ret, pre = 1440, -1
        i = 0
        while i <= 1440*2 and ret != 0:
            if bucket[i] == 0:
                i += 1
                continue
            if bucket[i] > 1:
                ret = 0
            elif pre != -1:
                ret = min(ret, i-pre)
            pre = i
            i += 1
        return ret


x = Solution()
print(x.findMinDifference(
    ["23:59", "00:00"]))
