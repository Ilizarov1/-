/**https://leetcode-cn.com/problems/house-robber-iii/
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var rob = function (root) {
    /**
     * f(node) : 选择节点的情况下子树的权重
     * g(node) : 不选择节点的情况下子树的权重
     * f(node) = g(left) + g(right)
     * g(node) = max{f(left),g(left)} + max(f(right),g(right))
     */
    const f = new Map();
    const g = new Map();
    function dfs(node) {
        if (node == null) return;
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
        g.set(
            node,
            Math.max(f.get(node.left) || 0, g.get(node.left) || 0) +
                Math.max(f.get(node.right) || 0, g.get(node.right) || 0)
        );
    }
    dfs(root);
    return Math.max(f.get(root) || 0, g.get(root) || 0);
};
