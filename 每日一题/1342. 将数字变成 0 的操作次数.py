# https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/
class Solution:
    def numberOfSteps(self, num: int) -> int:
        rs = 0
        one = 0
        for i in range(31, -1, -1):
            if ((num >> i) & 1) == 1:
                rs = i
                break
        for i in range(31, -1, -1):
            if((num >> i) & 1) == 1:
                one += 1
        return rs+one
