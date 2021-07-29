# https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree/
from typing import List


class Solution:
    # 如何求满二叉树的镜像结点，该层的头+尾-当前结点=该结点的镜像结点值
    def pathInZigZagTree(self, label: int) -> List[int]:
        head = [2**i for i in range(32)]
        tail = [2**(i+1)-1 for i in range(32)]
        level = -1
        for i in range(32):
            if label >= head[i] and label <= tail[i]:
                level = i
        ans = [label]
        cur = label
        for i in range(level-1, -1, -1):
            cur = head[i] + tail[i] - cur//2
            ans.append(cur)
        ans.reverse()
        return ans


x = Solution()
print(x.pathInZigZagTree(14))
