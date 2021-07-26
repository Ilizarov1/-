# https://leetcode-cn.com/problems/minimum-operations-to-make-a-subsequence/
from typing import List
import sys
import math


class Solution:
    def minOperations(self, target: List[int], arr: List[int]) -> int:
        n = len(target)
        m = len(arr)
        hashmap = {}
        for i in range(n):
            hashmap[target[i]] = i
        lst = []
        for i in range(m):
            x = arr[i]
            if x in hashmap:
                lst.append(hashmap[x])
        lstLen = len(lst)
        f = [0]*lstLen
        g = [sys.maxsize]*(lstLen+1)
        max_len = 0
        for i in range(lstLen):
            l, r = 0, lstLen
            while l < r:
                mid = math.floor((l+r+1)/2)
                if g[mid] < lst[i]:
                    l = mid
                else:
                    r = mid-1
            clen = r+1
            f[i] = clen
            g[clen] = min(g[clen], lst[i])
            max_len = max(max_len, clen)
        return n-max_len
