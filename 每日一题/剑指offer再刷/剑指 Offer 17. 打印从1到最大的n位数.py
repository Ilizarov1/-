# https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
from typing import List


class Solution:
    def printNumbers(self, n: int) -> List[int]:
        max_num = 10**n
        res = [i for i in range(1, max_num)]
        return res
