# https://leetcode-cn.com/problems/rotate-image/
from typing import List


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        for i in range(n):
            for j in range(i, n):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = tmp
        for i in range(n):
            for j in range(n//2):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[i][n-1-j]
                matrix[i][n-1-j] = tmp

        """
        Do not return anything, modify matrix in-place instead.
        """


x = Solution()
x.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
