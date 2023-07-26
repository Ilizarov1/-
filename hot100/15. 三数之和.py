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
            # 已排序，大于0则不可能存在三数和等于0
            if nums[i] > 0:
                return ret
            # 防止重复
            if i > 0 and nums[i] == nums[i-1]:
                continue
            # 双指针 计算，由两边逼近
            left = i+1
            right = n-1
            while left < right:
                if nums[i] + nums[left] + nums[right] == 0:
                    # 加入一个答案
                    ret.append([nums[i], nums[left], nums[right]])
                    # 继续判断是否含有其他答案，去除重复解
                    while left < right and nums[left] == nums[left+1]:
                        left += 1
                    while left < right and nums[right] == nums[right-1]:
                        right -= 1
                    left += 1
                    right -= 1
                # 太大，右边界移动
                elif nums[i]+nums[left]+nums[right] > 0:
                    right -= 1
                # 太小，左边界移动
                else:
                    left += 1
        return ret


x = Solution()
print(x.threeSum([-1, 0, 1, 2, -1, -4]))
