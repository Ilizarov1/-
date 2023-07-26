# https://leetcode-cn.com/problems/maximal-square/
from typing import List


class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        height = len(matrix)
        width = len(matrix[0])
        max_size = 0

        dp = [[0]*(width+1) for _ in range(height+1)]

        for row in range(height):
            for col in range(width):
                if matrix[row][col] == '1':
                    dp[row+1][col+1] = min(dp[row+1][col],
                                           dp[row][col], dp[row][col+1])+1
                    max_size = max(dp[row+1][col+1], max_size)
        return max_size*max_size
