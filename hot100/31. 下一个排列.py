# https://leetcode-cn.com/problems/next-permutation/
from typing import List


class Solution:
    # 两个原则
    # 1. 下一个数比较大
    # 2. 大的幅度尽可能小
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i, j, k = n-2, n-1, n-1
        # 向前寻找第一个 pre < cur 的数，说明有增大空间
        while i >= 0 and nums[i] >= nums[j]:
            i -= 1
            j -= 1
        # 向前寻找第一个比 pre 大的数，并交换
        # 经历第一次while，说明 [cur, ...]是降序排列，第一个即大的最小的数
        if i >= 0:
            while nums[i] >= nums[k]:
                k -= 1
            nums[i], nums[k] = nums[k], nums[i]
        i, j = j, n-1
        # 对 交换后的 [cur, ...] 进行升序排列，使其最小化
        # 这里进行对称交换，因为是从降序 -》升序
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1


x = Solution()
print(x.nextPermutation([3, 2, 1]))
