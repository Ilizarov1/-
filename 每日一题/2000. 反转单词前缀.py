# https://leetcode-cn.com/problems/reverse-prefix-of-word/
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = word.find(ch)
        if idx == -1:
            return word
        else:
            lst = list(word[:idx+1])
            lst.reverse()
            return ''.join(lst)+word[idx+1:]


x = Solution()
print(x.reversePrefix(word="abcd", ch="z"))
