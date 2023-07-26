# https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        visited = set()

        def check(i: int, j: int):
            sum = 0
            while i > 0:
                sum += i % 10
                i //= 10
            while j > 0:
                sum += j % 10
                j //= 10
            if sum > k:
                return False
            else:
                return True

        def dfs(i: int, j: int):
            res = 0
            if i < m and i >= 0 and j < n and j >= 0 and (i, j) not in visited:
                visited.add((i, j))
                if check(i, j):
                    res += 1
                    res += dfs(i+1, j)
                    res += dfs(i-1, j)
                    res += dfs(i, j+1)
                    res += dfs(i, j-1)
            return res
        return dfs(0, 0)


x = Solution()
print(x.movingCount(16, 8, 4))
