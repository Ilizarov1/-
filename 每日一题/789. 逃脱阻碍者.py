# https://leetcode-cn.com/problems/escape-the-ghosts/
from typing import List


class Solution:
    # 曼哈顿距离
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        dist = abs(target[0])+abs(target[1])
        ans = True
        for [x, y] in ghosts:
            dist_g = abs(target[0]-x)+abs(target[1]-y)
            if dist_g <= dist:
                ans = False
        return ans


x = Solution()
print(x.escapeGhosts([[1, 0], [0, 3]], [0, 1]))
