# https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
class Solution:
    def hammingWeight(self, n: int) -> int:
        b = bin(n).replace('0b', '')
        res = 0
        for i in b:
            if i == '1':
                res += 1
        return res
