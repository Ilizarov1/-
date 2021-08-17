# https://leetcode-cn.com/problems/student-attendance-record-i/
import collections


class Solution:
    def checkRecord(self, s: str) -> bool:
        hashmap = collections.defaultdict(int)
        continueState = False
        for state in s:
            if state == 'A':
                hashmap['A'] += 1
                if continueState:
                    hashmap['L'] = 0
                    continueState = False
            elif state == 'L':
                hashmap['L'] += 1
                if not continueState:
                    continueState = True
                if hashmap['L'] >= 3:
                    return False
            else:
                if continueState:
                    hashmap['L'] = 0
                    continueState = False
        return True if hashmap['A'] < 2 else False


x = Solution()
print(x.checkRecord("LALL"))
