# https://leetcode-cn.com/problems/word-search/
from typing import List


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        len_word = len(word)
        visited = set()
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]

        def dfs(i: int, j: int, cur: int, visited: set):
            if cur == len_word-1:
                return True
            flag = False
            for dir_i, dir_j in dirs:
                new_i, new_j = i + dir_i, j+dir_j
                if 0 <= new_i < m and 0 <= new_j < n and ((new_i, new_j) not in visited) and board[new_i][new_j] == word[cur+1]:
                    visited.add((new_i, new_j))
                    flag = flag or dfs(new_i, new_j, cur+1, visited)
                    visited.remove((new_i, new_j))
                    if flag:
                        break
            return flag

        ret = False
        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0]:
                    visited.add((i, j))
                    ret = ret or dfs(i, j, 0, visited)
                    visited.remove((i, j))
                if ret:
                    return ret
        return ret


x = Solution()
print(x.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]], "ABCCED"))
