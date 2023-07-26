# https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
from typing import List


class Solution:
    def minArray(self, numbers: List[int]) -> int:
        i, j = 0, len(numbers)-1
        while i < j:
            m = (i+j)//2
            if numbers[m] < numbers[j]:
                j = m
            elif numbers[m] > numbers[j]:
                i = m+1
            else:
                j -= 1
        return numbers[i]
