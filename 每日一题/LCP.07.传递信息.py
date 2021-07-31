# https://leetcode-cn.com/problems/chuan-di-xin-xi/
from typing import DefaultDict, List


class Solution:
    def numWays(self, n: int, relation: List[List[int]], k: int) -> int:
        hashmap = DefaultDict(set)
        for i in relation:
            hashmap[i[0]].add(i[1])
        q = [0]
        while k:
            s = len(q)
            while s:
                tmp = q.pop(0)
                for node in hashmap[tmp]:
                    q.append(node)
                s -= 1
            k -= 1
        ans = 0
        for i in q:
            if i == n-1:
                ans += 1
        return ans


x = Solution()
print(x.numWays(5, [[0, 2], [2, 1], [3, 4],
      [2, 3], [1, 4], [2, 0], [0, 4]], 3))
