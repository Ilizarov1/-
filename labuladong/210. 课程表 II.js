/**https://leetcode-cn.com/problems/course-schedule-ii/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = Array(numCourses);
    const res = [];
    const path = Array(numCourses).fill(false);
    let isCycle = false;
    const visited = Array(numCourses).fill(false);

    // 建图
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [cur, pre] of prerequisites) {
        graph[pre].push(cur);
    }

    // 遍历函数
    function traverse(cur = 0) {
        // 递归退出
        if (path[cur]) {
            isCycle = true;
        }
        if (visited[cur] || isCycle) {
            return;
        }
        // 标记访问
        visited[cur] = true;
        path[cur] = true;
        for (const neighbor of graph[cur]) {
            traverse(neighbor);
        }
        // 后序遍历
        res.push(cur);
        path[cur] = false;
    }

    graph.forEach((v, i) => {
        res.length = 0;
        traverse(i);
    });
    if (isCycle) return [];
    return res.reverse();
};
console.log(findOrder(1, []));
