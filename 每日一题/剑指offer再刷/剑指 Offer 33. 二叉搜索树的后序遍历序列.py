# https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
from typing import List


class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        def recur(l: int, r: int) -> bool:
            if l >= r:
                return True
            root = postorder[r]
            m = r-1
            while(postorder[m] >= root):
                m -= 1
            # [l,m] 左子树
            # [m+1,r-1] 右子树
            for idx in range(l, m+1):
                if postorder[idx] >= root:
                    return False
            return recur(l, m) and recur(m+1, r-1)
        return recur(0, len(postorder)-1)
