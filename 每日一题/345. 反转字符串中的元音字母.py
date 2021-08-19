# https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
class Solution:
    def reverseVowels(self, s: str) -> str:
        vow = {'a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I'}
        i, j = 0, len(s)-1
        s_list = list(s)
        while i < j:
            while i < len(s) and s_list[i] not in vow:
                i += 1
            while j > -1 and s_list[j] not in vow:
                j -= 1
            if i < j:
                tmp = s_list[i]
                s_list[i] = s_list[j]
                s_list[j] = tmp
            i += 1
            j -= 1
        return ''.join(s_list)


x = Solution()
print(x.reverseVowels("a.b,."))
