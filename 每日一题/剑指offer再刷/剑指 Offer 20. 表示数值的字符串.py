# https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
class Solution:
    numLst = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}

    def isInt(self, s: str) -> bool:
        if s[0] == '+' or s[0] == '-':
            s = s[1:]
        for i in s:
            if i not in self.numLst:
                return False
        if len(s) == 0:
            return False
        return True

    def isDec(self, s: str) -> bool:
        if s[0] == '+' or s[0] == '-':
            s = s[1:]
        once = False
        if len(s) == 1:
            return False
        for i in range(len(s)):
            if s[i] not in self.numLst:
                if once:
                    return False
                if s[i] == '.':
                    once = True
                    continue
                return False
        if len(s) == 0:
            return False
        return True

    # def isAppend(self, s: str) -> bool:
    #     pass

    def isE(self, s: str) -> int:
        idx_e = s.find('e')
        idx_E = s.find('E')
        if idx_e != -1:
            return idx_e
        if idx_E != -1:
            return idx_E
        return -1

    def isNumber(self, s: str) -> bool:
        p = s.strip()
        if len(p) == 0:
            return False
        e_idx = self.isE(p)
        if e_idx == -1:
            return self.isInt(p) or self.isDec(p)
        elif e_idx == 0 or e_idx == len(p)-1:
            return False
        else:
            return (self.isInt(p[:e_idx]) or self.isDec(p[:e_idx])) and self.isInt(p[e_idx+1:])


x = Solution()
print(x.isNumber("4e+"))
