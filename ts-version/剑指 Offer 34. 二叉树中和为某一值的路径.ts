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
function pathSum(root: TreeNode | null, target: number): number[][] {
    if (!root) return [];
    const res: number[][] = [];

    function dfs(root: TreeNode, target: number, path: number[]) {
        if (target === 0 && !root.left && !root.right) {
            res.push(path);
        }

        if (root.left) {
            dfs(root.left, target - root.left.val, [...path, root.left.val]);
        }
        if (root.right) {
            dfs(root.right, target - root.right.val, [...path, root.right.val]);
        }
    }

    dfs(root, target - root.val, [root.val]);

    return res;
}
