# https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
class Solution:
    def findNthDigit(self, n: int) -> int:
        start, digit, count = 1, 1, 9
        while n > count:
            n -= count
            start *= 10
            digit += 1
            count = 9*start*digit
        num = start+(n-1)//digit
        return int(str(num)[(n-1) % digit])


x = Solution()
print(x.findNthDigit(3))
