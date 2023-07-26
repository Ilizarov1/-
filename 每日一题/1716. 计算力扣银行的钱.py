# https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/
class Solution:
    def totalMoney(self, n: int) -> int:
        cur, mond, ret, cnt = 0, 0, 0, 0
        while n:
            if cnt % 7 == 0:
                mond += 1
                cur = mond
            ret += cur
            cur += 1
            n -= 1
            cnt += 1
        return ret
