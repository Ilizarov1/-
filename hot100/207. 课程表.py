# https://leetcode-cn.com/problems/course-schedule/
from collections import deque
import queue
from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = [0]*numCourses
        graph = [[] for _ in range(numCourses)]
        queue = deque()
        # 建图
        for cur, pre in prerequisites:
            indegree[cur] += 1
            graph[pre].append(cur)
        # 统计入度为0的
        for i in range(numCourses):
            if indegree[i] == 0:
                queue.append(i)
        # BFS
        while queue:
            pre = queue.popleft()
            numCourses -= 1
            for cur in graph[pre]:
                indegree[cur] -= 1
                if indegree[cur] == 0:
                    queue.append(cur)
        return not numCourses
