# https://leetcode-cn.com/problems/find-the-town-judge/
from typing import List


class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1 and trust == []:
            return 1
        # 法官出度为0，入度为n
        in_degree = [0 for i in range(n+1)]
        out_degree = [0 for i in range(n+1)]

        # 统计出入度
        for edge in trust:
            [tail, head] = edge
            out_degree[tail] += 1
            in_degree[head] += 1
        for i in range(n+1):
            if in_degree[i] == n-1 and out_degree[i] == 0:
                return i
        return -1


x = Solution()
print(x.findJudge(2, [[1, 2]]))
