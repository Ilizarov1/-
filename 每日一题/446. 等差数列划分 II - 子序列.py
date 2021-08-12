# https://leetcode-cn.com/problems/arithmetic-slices-ii-subsequence/
from typing import List
import collections


class Solution:
    # 动态规划，序列dp，先不考虑最短长度为3的限制，统计所有的差值相同的序列数量，再减去长度为2的序列数量
    #           i-1
    # f[i][d] = ∑ ( f[j][d] + 1 )
    #           j
    # d = nums[i] - nums[j]
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        n = len(nums)
        f = []
        for i in range(n):
            cur = collections.defaultdict(int)
            for j in range(0, i):
                d = nums[i]-nums[j]
                prev = f[j]
                cnt = cur[d]
                cnt += prev[d]
                cnt += 1
                cur[d] = cnt
            f.append(cur)
        ans = 0
        for i in range(n):
            cur = f[i]
            for val in cur.values():
                ans += val
        # 长度为2的数列，即为任意两个数的组合数对的数量
        cnt = (n-1)*n//2
        return ans-cnt


x = Solution()
print(x.numberOfArithmeticSlices([2, 4, 6, 8, 10]))
