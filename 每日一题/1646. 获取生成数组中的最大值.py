# https://leetcode-cn.com/problems/get-maximum-in-generated-array/
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        nums = [0 for i in range(n+1)]
        nums[0] = 0
        if n > 0:
            nums[1] = 1
        i = 1
        while 2*i <= n and 2*i+1 <= n:
            nums[2*i] = nums[i]
            nums[2*i+1] = nums[i]+nums[i+1]
            i += 1
        return max(nums)


x = Solution()
print(x.getMaximumGenerated(0))
