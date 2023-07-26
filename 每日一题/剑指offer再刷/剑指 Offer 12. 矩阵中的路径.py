# https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
from typing import List
from functools import lru_cache


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:

        m, n = len(board), len(board[0])
        visited = [[False for i in range(n)] for i in range(m)]

        @lru_cache(None)
        def dfs(i: int, j: int, s: int):
            if s < len(word) and i < m and i >= 0 and j < n and j >= 0 and not visited[i][j]:
                visited[i][j] = True
                if board[i][j] == word[s]:
                    if s == len(word)-1:
                        return True
                    if dfs(i+1, j, s+1) or dfs(i, j+1, s+1) or dfs(i-1, j, s+1) or dfs(i, j-1, s+1):
                        return True
                visited[i][j] = False
            return False

        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):
                    return True
        return False


x = Solution()
print(x.exist(
    [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
