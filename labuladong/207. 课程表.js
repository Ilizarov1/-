/**https://leetcode-cn.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = Array(numCourses);
    const visited = Array(numCourses).fill(false);
    const onPath = Array(numCourses).fill(false);
    let hasCycle = false;
    // 建图
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [cur, pre] of prerequisites) {
        graph[pre].push(cur);
    }

    // 遍历判断是否有环
    function traverse(graph = [], s = 0) {
        // 存在环
        if (onPath[s]) hasCycle = true;

        // 有环或者已经遍历过，退出遍历
        if (visited[s] || hasCycle) {
            return;
        }
        // 回溯遍历,标记s已遍历
        visited[s] = true;
        onPath[s] = true;
        // 对s的邻接点进行下一轮遍历
        for (const neighbor of graph[s]) {
            traverse(graph, neighbor);
        }
        onPath[s] = false;
    }
    for (let i = 0; i < numCourses; i++) {
        traverse(graph, i);
    }
    return !hasCycle;
};
console.log(canFinish(2, [[1, 0]]));
