# https://leetcode-cn.com/problems/map-of-highest-peak/
from collections import deque
from typing import List


class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n = len(isWater), len(isWater[0])
        ret = [[0]*n for i in range(m)]
        q = deque()
        for i in range(m):
            for j in range(n):
                if isWater[i][j]:
                    q.append((i, j))
                else:
                    ret[i][j] = -1
        h = 1
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        while q:
            d = len(q)
            for _ in range(d):
                x, y = q.popleft()
                for dir in dirs:
                    nx, ny = x+dir[0], y+dir[1]
                    if 0 <= nx < m and 0 <= ny < n and ret[nx][ny] == -1:
                        ret[nx][ny] = h
                        q.append((nx, ny))
            h += 1
        return ret
