# https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays/
from typing import List


class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        n = len(arr)
        ans = 0
        for i in range(n):
            j = i+1
            k = 1
            while j <= n:
                for num in arr[i:j]:
                    ans += num
                j = i+2*k+1
                k += 1
        return ans


x = Solution()
print(x.sumOddLengthSubarrays([1, 4, 2, 5, 3]))
