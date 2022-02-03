# https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
class Solution:
    def findMinFibonacciNumbers(self, k: int) -> int:
        a, b = 1, 1
        while b <= k:
            c = a+b
            a = b
            b = c
        ret = 0
        while k != 0:
            if b <= k:
                k -= b
                ret += 1
            c = b - a
            b = a
            a = c
        return ret
