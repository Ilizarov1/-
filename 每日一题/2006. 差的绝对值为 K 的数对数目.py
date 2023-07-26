# https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/
import collections
from typing import List


class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        ret = 0
        cnt = collections.defaultdict(int)
        for num in nums:
            ret += cnt[num-k] + cnt[num+k]
            cnt[num] += 1
        return ret


x = Solution()
print(x.countKDifference([1, 2, 2, 1], 1))
