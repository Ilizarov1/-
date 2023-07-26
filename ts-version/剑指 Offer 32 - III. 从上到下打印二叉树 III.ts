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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const res: number[][] = [];
    const q: TreeNode[] = [root];

    while (q.length) {
        const tmp: number[] = [];
        const times = q.length;
        for (let i = 0; i < times; i++) {
            const head = q.shift();
            if (res.length % 2) tmp.unshift(head.val);
            else tmp.push(head.val);

            if (head.left) q.push(head.left);
            if (head.right) q.push(head.right);
        }
        res.push(tmp);
    }

    return res;
}
