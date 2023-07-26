# https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/
from typing import List
from queue import PriorityQueue


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        ret = []
        # i, j = 0, 0
        len1, len2 = len(nums1), len(nums2)
        PQ = PriorityQueue()
        # while k:
        #     times = k
        #     while i < len1 and j < len2 and times:
        #         PQ.put((nums1[i]+nums2[j], (nums1[i], nums2[j])))
        #         times -= 1
        #         j += 1
        #     if PQ.empty():
        #         break
        #     ret.append(PQ.get()[1])
        #     k -= 1
        #     j = 0
        #     i += 1
        for i in range(min(k, len1)):
            PQ.put((nums1[i]+nums2[0], (i, 0)))
        while k and not PQ.empty():
            idx_pair = PQ.get()[1]
            ret.append((nums1[idx_pair[0]], nums2[idx_pair[1]]))
            k -= 1
            j = idx_pair[1] + 1
            i = idx_pair[0]
            if j < len2:
                PQ.put((nums1[i]+nums2[j], (i, j)))
        return ret


x = Solution()
print(x.kSmallestPairs([1, 2], [3], 3))
