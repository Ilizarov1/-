# https://leetcode-cn.com/problems/restore-the-array-from-adjacent-pairs/
from typing import DefaultDict, List

# 单向构造法，只有开头和结尾的元素出现频次为1


class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        n = len(adjacentPairs)
        n += 1
        # 统计元素出现次数
        cnts = DefaultDict(int)
        # 记录元素相邻情况
        hashmap = DefaultDict(list)
        for a, b in adjacentPairs:
            cnts[a] += 1
            cnts[b] += 1
            hashmap[a].append(b)
            hashmap[b].append(a)
        start = -1
        # 寻找第一个元素，谁前谁后都可以
        for i, v in cnts.items():
            if v == 1:
                start = i
                break
        ans = [0]*n
        # 放置第一个元素
        ans[0] = start
        ans[1] = hashmap[start][0]
        # 单向构造
        for i in range(2, n):
            x = ans[i-1]
            for j in hashmap[x]:
                # 每个元素有两个相邻的元素
                if j != ans[i-2]:
                    ans[i] = j
        return ans


x = Solution()
x.restoreArray([[2, 1], [3, 4], [3, 2]])
