from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # 计数法
        ans = []
        mp = {}
        for word in strs:
            lst = [0]*26
            for alpha in word:
                # 对26个字母计数
                lst[ord(alpha)-ord('a')] = lst[ord(alpha)-ord('a')]+1
            # 计数结果作为字典的key
            key = str(lst)
            wrdLst = mp.get(key, [])
            wrdLst.append(word)
            mp[key] = wrdLst
        for key in mp:
            ans.append(mp[key])
        return ans


x = Solution()
x.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
