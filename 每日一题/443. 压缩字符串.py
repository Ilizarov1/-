# https://leetcode-cn.com/problems/string-compression/
from typing import List


class Solution:
    def compress(self, chars: List[str]):
        s = []
        cnt = 0
        prev = chars[0]
        n = len(chars)
        for i in range(n+1):
            if i < len(chars) and chars[i] == prev:
                cnt += 1
            else:
                s.append(prev)
                if i < len(chars):
                    prev = chars[i]
                if cnt > 1:
                    nums = []
                    while cnt > 0:
                        nums.append(cnt % 10)
                        cnt = cnt//10
                    while nums:
                        s.append(str(nums.pop()))
                cnt = 1
        chars.clear()
        for c in s:
            chars.append(c)
        return len(chars)


x = Solution()
print(x.compress(["a", "a", "b", "b", "c", "c", "c"]))
