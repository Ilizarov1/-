import math

# https://leetcode-cn.com/problems/palindrome-number/


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        temp = x
        reverseX = 0
        while temp > 0:
            reverseX = reverseX*10+temp % 10
            temp = math.floor(temp/10)
        if reverseX == x:
            return True
        return False
