# https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
from typing import List


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "":
            return []
        mp = {}
        mp['2'] = ['a', 'b', 'c']
        mp['3'] = ['d', 'e', 'f']
        mp['4'] = ['g', 'h', 'i']
        mp['5'] = ['j', 'k', 'l']
        mp['6'] = ['m', 'n', 'o']
        mp['7'] = ['p', 'q', 'r', 's']
        mp['8'] = ['t', 'u', 'v']
        mp['9'] = ['w', 'x', 'y', 'z']
        ret = []
        n = len(digits)

        def recur(cur: int, comb: str):
            if cur >= n:
                ret.append(comb)
            else:
                for d in mp[digits[cur]]:
                    recur(cur+1, comb+d)
        recur(0, "")
        return ret
