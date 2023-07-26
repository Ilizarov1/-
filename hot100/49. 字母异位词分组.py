# https://leetcode-cn.com/problems/group-anagrams/
from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # n = len(strs)
        # code = []
        # cnt = [[0]*26 for i in range(n)]

        # for i in range(n):
        #     for a in strs[i]:
        #         idx = ord(a) - ord('a')
        #         cnt[i][idx] += 1
        #     tmp = ''
        #     for j in range(26):
        #         if cnt[i][j] != 0:
        #             tmp += chr(j+ord('a'))+str(cnt[i][j])
        #     code.append(tmp)

        # d = {}
        # for i in range(n):
        #     if d.get(code[i]) == None:
        #         d[code[i]] = [strs[i]]
        #     else:
        #         d[code[i]].append(strs[i])

        # ret = []
        # for res in d.values():
        #     ret.append(res)
        # return ret
        # 用质数
        alaphe = {'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19, 'i': 23,
                  'j': 29, 'k': 31, 'l': 37, 'm': 41, 'n': 43, 'o': 47, 'p': 53, 'q': 59, 'r': 61, 's': 67, 't': 71, 'u': 73, 'v': 79, 'w': 83, 'x': 89, 'y': 97, 'z': 101}
        d = {}
        for s in strs:
            res = 1
            for w in s:
                res *= alaphe[w]
            if not d.get(res):
                d[res] = [s]
            else:
                d[res].append(s)
        ret = []
        for i in d.values():
            ret.append(i)
        return ret


x = Solution()
print(x.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
