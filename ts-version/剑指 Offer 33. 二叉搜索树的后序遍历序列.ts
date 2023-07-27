function verifyPostorder(postorder: number[]): boolean {
    function build(postorder: number[], min: number, max: number) {
        if (!postorder.length) return;

        const root = postorder[postorder.length - 1];

        // 不符合要求
        if (root < min || root > max) return;
        // pop，视作构建
        postorder.pop();
        // 构建子树
        build(postorder, root, max);
        build(postorder, min, root);
    }

    build(postorder, -Infinity, Infinity);
    return !postorder.length;
}
