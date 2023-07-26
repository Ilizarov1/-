# https://leetcode-cn.com/problems/generate-parentheses/
from typing import List


class Solution:
    # 左括号一定大于等于有括号才合法
    def generateParenthesis(self, n: int) -> List[str]:
        ret = []

        def recur(cur, left, right):
            if left == 0 and right == 0:
                ret.append(cur)
                return
            if right < left:
                return
            if left > 0:
                recur(cur+'(', left-1, right)
            if right > 0:
                recur(cur+')', left, right-1)
        recur("", n, n)
        return ret
