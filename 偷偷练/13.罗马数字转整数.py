# https://leetcode-cn.com/problems/roman-to-integer/

class Solution:
    def romanToInt(self, s: str) -> int:
        romanMap = {'I': 1, 'V': 5, 'X': 10,
                    'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        ans = 0
        n = len(s)
        i = 0

        while i < n:
            if i+1 < n and romanMap[s[i]] < romanMap[s[i+1]]:
                ans -= romanMap[s[i]]
            else:
                ans += romanMap[s[i]]
            i += 1
        return ans


x = Solution()
print(x.romanToInt("MCMXCIV"))
