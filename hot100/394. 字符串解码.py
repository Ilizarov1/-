# https://leetcode-cn.com/problems/decode-string/
class Solution:
    def decodeString(self, s: str) -> str:
        stk, ret, multi = [], '', 0
        for i in s:
            if i == '[':
                stk.append([multi, ret])
                multi, ret = 0, ''
            if i == ']':
                cur_multi, last_ret = stk.pop()
                ret = last_ret + cur_multi * ret
            if i >= '0' and i <= '9':
                multi = multi * 10 + int(i)
            if i >= 'a' and i <= 'z':
                ret += i
        return ret

# initial:
#   想到了栈，想到了括号匹配
# something wrong:
#   倍数处理有问题，结果拼接处理有问题
# something better:
#   [current_multi, last_ret] in stack
