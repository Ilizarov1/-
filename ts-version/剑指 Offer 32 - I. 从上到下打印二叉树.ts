/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function levelOrder(root: TreeNode | null): number[] {
    // bfs
    // 队列
    if (!root) return [];

    const res: number[] = [];

    const q: TreeNode[] = [root];

    while (q.length !== 0) {
        const head = q.shift();
        res.push(head.val);
        if (head.left) q.push(head.left);
        if (head.right) q.push(head.right);
    }

    return res;
}
