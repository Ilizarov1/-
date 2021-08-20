# https://leetcode-cn.com/problems/reverse-string-ii/
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        isRev = True
        lst = list(s)
        n = len(lst)
        prev = 0
        step = k
        for i in range(n):
            step -= 1
            if (not step) or i == n-1:
                if isRev:
                    tail = i+1
                    lst[prev:tail] = reversed(lst[prev:tail])
                    prev += 2*k
                isRev = not isRev
                step = k
        return ''.join(lst)


x = Solution()
print(x.reverseStr("abcdefg", 2))
