from functools import lru_cache


def solution(S, A):
    # write your code in Python 3.6
    tree = {0: []}
    N = len(A)
    for i in range(N):
        if i == 0:
            continue
        nodes_p = tree.get(A[i], [])
        nodes_p.append(i)
        tree[A[i]] = nodes_p
        nodes_c = tree.get(i, [])
        nodes_c.append(A[i])
        tree[i] = nodes_c
    visited = set()

    @lru_cache(None)
    def trackback(cur: int, length: int) -> int:
        ret = length
        nodes = tree[cur]

        for n in nodes:
            if n not in visited and S[n] != S[cur]:
                visited.add(n)
                ret = max(trackback(n, length+1), ret)
                visited.remove(n)
        return ret

    max_len = 0
    for i in range(N):
        visited.add(i)
        max_len = max(max_len, trackback(i, 1))
        visited.remove(i)
    return max_len


print(solution('abbab', [-1, 0, 0, 0, 2]))
