# https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
from typing import List


class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        i, j = 0, len(nums)-1
        n = len(nums)
        while i < j:
            while i < n and nums[i] % 2 == 1:
                i += 1
            while j > -1 and nums[j] % 2 == 0:
                j -= 1
            if j >= 0 and i < n and i < j:
                tmp = nums[i]
                nums[i] = nums[j]
                nums[j] = tmp
        if i >= n and j > -1:
            tmp = nums[j]
            for k in range(n-1, -1, -1):
                nums[k] = nums[k-1]
            nums[0] = tmp
        if j < 0 and i < n:
            tmp = nums[i]
            for k in range(0, n-1):
                nums[k] = nums[k+1]
            nums[n-1] = tmp
        return nums


x = Solution()
print(x.exchange([1, 3, 5]))
