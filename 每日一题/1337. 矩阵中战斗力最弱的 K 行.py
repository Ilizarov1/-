# https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/
from typing import List


class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        army = []
        ans = []

        def check(mid: int, row: List[int]):
            return row[mid] == 0

        for i in range(len(mat)):
            l, r = 0, len(mat[i])
            while l < r:
                mid = (l+r)//2
                if check(mid, mat[i]):
                    r = mid
                else:
                    l = mid+1
            army.append([r, i])
        for i in sorted(army, key=lambda x: x[0]):
            ans.append(i[1])
            k -= 1
            if k <= 0:
                break
        return ans


x = Solution()
print(x.kWeakestRows([[1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [
      1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 1, 1, 1, 1]], 3))
