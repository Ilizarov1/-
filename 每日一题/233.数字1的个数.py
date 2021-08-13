# https://leetcode-cn.com/problems/number-of-digit-one/
class Solution:
    def countDigitOne(self, n: int) -> int:
        ans = 0
        if n < 10:
            return 1 if n else 0
        num = str(n)
        len_t = len(num)-1
        nxt = int(num[1:])
        # 递归
        ans = self.f(len_t)*int(num[0])+self.countDigitOne(nxt)
        # 头一位数字
        # >1 : 则为 10**len_t, 即从10...0 - 19...9 中头一位1的个数
        # =1 : 则为 nxt+1
        return ans+10**len_t if int(num[0]) > 1 else ans+nxt+1

    # 通过找规律返回1的个数
    # 0-9: 1
    # 0-99: 10 + 1*10 = 20
    # 0-999： 100 + 10 * 20 = 300
    # 0-9999： 1000 + 10 * 300 = 4000

    def f(self, i: int):
        return i*10**(i-1)


x = Solution()
print(x.countDigitOne(200))
