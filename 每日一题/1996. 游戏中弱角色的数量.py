# https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game/
import functools
from typing import List


# 普通排序
# class Solution:
#     def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
#         n = len(properties)

#         def defend(a, b):
#             if a[0] != b[0]:
#                 return a[0] - b[0]
#             else:
#                 return b[1] - a[1]
#         properties.sort(key=functools.cmp_to_key(defend))

#         ret = 0
#         max = 0
#         for i in range(n-1, -1, -1):
#             if properties[i][1] < max:
#                 ret += 1
#             else:
#                 max = properties[i][1]
#         return ret
# 桶排序
class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        max_attack = 0
        # 取最大攻击力
        for p in properties:
            max_attack = max(max_attack, p[0])
        attacks = [0]*(max_attack+1)
        # 设置桶，桶里面放当前攻击力下存在的最大防御力
        for [at, de] in properties:
            attacks[at] = max(attacks[at], de)
        # 修改桶，桶里放比当前攻击力大的最大防御值
        max_defend = 0
        for i in range(max_attack, -1, -1):
            tmp = max_defend
            if attacks[i] > max_defend:
                max_defend = attacks[i]
            attacks[i] = tmp
        # 遍历统计答案
        ret = 0
        for [at, de] in properties:
            if at < max_attack and de < attacks[at]:
                ret += 1
        return ret


x = Solution()
print(x.numberOfWeakCharacters([[1, 5], [10, 4], [4, 3]]))
