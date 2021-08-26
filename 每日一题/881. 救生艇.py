# https://leetcode-cn.com/problems/boats-to-save-people/
from typing import List


class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        l, r = 0, len(people)-1
        ans = 0
        while l <= r:
            if people[l]+people[r] <= limit:
                ans += 1
                l += 1
                r -= 1
            else:
                ans += 1
                r -= 1
        return ans


x = Solution()
print(x.numRescueBoats([3, 5, 3, 4], 5))
