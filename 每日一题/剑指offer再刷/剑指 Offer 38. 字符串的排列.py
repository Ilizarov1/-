# https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
from typing import List


class Solution:
    def permutation(self, s: str) -> List[str]:
        ans = []
        n = len(s)
        visited = [False for i in range(n)]

        def recur(i: int, tmp: str):
            visited[i] = True
            if len(tmp) >= n:
                ans.append(tmp)
                visited[i] = False
                return
            for idx in range(n):
                if not visited[idx]:
                    recur(idx, tmp+s[idx])
            visited[i] = False
            return
        for i in range(n):
            recur(i, s[i])
        fin = []
        for s in ans:
            if s not in fin:
                fin.append(s)
        return fin
