from typing import List


def lst(arr: List[int], n: int) -> int:
    ret = 0
    for i in range(n):
        res = 1
        for j in range(i, n):
            res *= arr[j]
            if res > 0:
                ret += 1
    return ret
