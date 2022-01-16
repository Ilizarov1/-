# https://leetcode-cn.com/problems/3sum/
from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        if n < 3:
            return []
        nums.sort()
        ret = []
        for i in range(n):
            if nums[i] > 0:
                return ret
            if i > 0 and nums[i] == nums[i-1]:
                continue
            left = i+1
            right = n-1
            while left < right:
                if nums[i] + nums[left] + nums[right] == 0:
                    ret.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left+1]:
                        left += 1
                    while left < right and nums[right] == nums[right-1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif nums[i]+nums[left]+nums[right] > 0:
                    right -= 1
                else:
                    left += 1
        return ret


x = Solution()
print(x.threeSum([-1, 0, 1, 2, -1, -4]))
