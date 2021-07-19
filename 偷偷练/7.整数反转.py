import math

# https://leetcode-cn.com/problems/reverse-integer/


class Solution:
    def reverse(self, x: int) -> int:
        low = -math.pow(2, 31)
        high = math.pow(2, 31)-1
        arr = str(x)
        lst = []
        for i in arr:
            lst.append(i)
        start = 0
        end = len(arr)-1
        if arr[0] == '-':
            start = 1
        while start < end:
            temp = lst[start]
            lst[start] = lst[end]
            lst[end] = temp
            start += 1
            end -= 1
        ans = int("".join(lst))
        if ans < low or ans > high:
            return 0
        return ans


x = Solution()
x.reverse(123)
