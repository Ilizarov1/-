# https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
from typing import List


class Solution:
    def findNumberIn2DArray(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix:
            return False
        n = len(matrix)
        m = len(matrix[0])
        i, j = m-1, 0
        while i >= 0 and j <= n-1:
            if target < matrix[j][i]:
                i -= 1
            elif target > matrix[j][i]:
                j += 1
            else:
                return True
        return False
