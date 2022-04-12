/**https://leetcode-cn.com/problems/all-paths-from-source-to-target/
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const ret = [];
    function traverse(graph = [[]], s = 0, path = []) {
        path.push(s);
        const n = graph.length;
        // 到达终点
        if (s === n - 1) {
            ret.push(Array.from(path));
            path.pop();
            return;
        }
        // 访问相邻节点
        for (const v of graph[s]) {
            traverse(graph, v, path);
        }
        // 结束当前节点的访问
        path.pop();
    }
    traverse(graph, 0, []);
    return ret;
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
