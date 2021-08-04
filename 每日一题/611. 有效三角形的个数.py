# https://leetcode-cn.com/problems/valid-triangle-number/

from typing import List


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        ans = 0
        for i in range(n):
            for j in range(i+1, n):
                maximum = nums[i]+nums[j]
                l, r = j+1, n-1
                while l < r:
                    mid = (l+r+1)//2
                    if nums[mid] < maximum:
                        l = mid
                    else:
                        r = mid-1
                if nums[r] < maximum:
                    ans += r-j
        return ans


x = Solution()
print(x.triangleNumber([4, 2, 3, 4]))
