# https://leetcode-cn.com/problems/valid-parentheses/
class Solution:
    def isValid(self, s: str) -> bool:
        n = len(s)
        stack = []
        left = {'(', '{', '['}
        right = {'(': ')', '{': '}', '[': ']'}
        for i in range(n):
            if s[i] in left:
                stack.append(s[i])
            else:
                if len(stack) != 0:
                    tmp = stack.pop()
                    if right[tmp] != s[i]:
                        return False
                else:
                    return False
        if len(stack) != 0:
            return False
        return True


x = Solution()
print(x.isValid("]"))
