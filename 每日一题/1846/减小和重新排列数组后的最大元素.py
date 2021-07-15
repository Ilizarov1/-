from typing import List


class Solution:
    # 贪心决策
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        # 排序
        arr.sort()
        # 第一个元素为1
        arr[0] = 1
        n = len(arr)
        for i in range(1, n):
            # 不满足条件的转换为满足条件的正整数
            if(arr[i]-arr[i-1] > 1):
                arr[i] = arr[i-1]+1
        return arr[n-1]


if __name__ == '__main__':
    x = Solution()
    arr = [2, 2, 1, 2, 1]
    print(x.maximumElementAfterDecrementingAndRearranging(arr))
