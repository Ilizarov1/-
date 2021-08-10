# https://leetcode-cn.com/problems/super-ugly-number/
from typing import List
from queue import PriorityQueue


class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        # 优先队列实现多路归并
        q = PriorityQueue()
        # 每一个primes[i]*丑数形成一个队列
        for i in range(len(primes)):
            q.put((primes[i], i, 0))
        ans = [1]
        j = 1
        while(j < n):
            # 从优先队列中取出最小值
            # python 优先队列根据元组第一个元素进行排序
            # val: 当前指向的值
            # i: 由primes[i]构造的序列
            # idx: 丑数下标, val = primes[i] * ans[idx]
            val, i, idx = q.get()
            # 加入答案, 由于序列单调，简单判断不同即可
            if val != ans[j-1]:
                ans.append(val)
                j += 1
            # 队列中的某一路退出一个以后构造新的加入，保证每一路都有一个元素
            q.put((ans[idx+1]*primes[i], i, idx+1))
        return ans[n-1]


x = Solution()
print(x.nthSuperUglyNumber(12, [2, 7, 13, 19]))
