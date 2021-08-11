# https://leetcode-cn.com/problems/arithmetic-slices/
from typing import List

# 双指针


class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        l, r = 0, 2
        ans = 0
        n = len(nums)
        if n < 3:
            return ans
        while l < n-2:
            # 判断是否为等差数列
            if l+1 < n and r < n:
                while nums[l+1]-nums[l] == nums[r]-nums[r-1]:
                    # 是，向前移动r指针,答案+1
                    ans += 1
                    r += 1
                    if r >= n:
                        break
            l += 1
            r = l+2

        return ans


x = Solution()
print(x.numberOfArithmeticSlices([1, 2, 3, 4]))
