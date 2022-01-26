# https://leetcode-cn.com/problems/detect-squares/
from typing import List
import collections


class DetectSquares:

    def __init__(self):
        self.mp = {}

    def add(self, point: List[int]) -> None:
        [x, y] = point
        if not self.mp.get(x):
            self.mp[x] = collections.defaultdict(int)
        self.mp[x][y] += 1

    def count(self, point: List[int]) -> int:
        [x, y] = point
        if not self.mp.get(x):
            self.mp[x] = collections.defaultdict(int)
        ret = 0
        for nx in self.mp.keys():
            if nx == x:
                continue
            side = nx - x
            ny = y + side
            if self.mp[x][ny] and self.mp[nx][ny] and self.mp[nx][y]:
                ret += (self.mp[x][ny]*self.mp[nx][ny]*self.mp[nx][y])
            ny = y - side
            if self.mp[x][ny] and self.mp[nx][ny] and self.mp[nx][y]:
                ret += (self.mp[x][ny]*self.mp[nx][ny]*self.mp[nx][y])
        return ret

        # Your DetectSquares object will be instantiated and called as such:
        # obj = DetectSquares()
        # obj.add(point)
        # param_2 = obj.count(point)
