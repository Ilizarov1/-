function permutation(s: string): string[] {
    const path = '';
    const visited = Array(s.length).fill(false);
    const result: string[] = [];

    dfs(s, visited, path, result);

    return Array.from(new Set(result));
}

function dfs(s: string, visited: boolean[], path: string, result: string[]) {
    if (path.length === s.length) {
        result.push(path);
        return;
    }

    for (let i = 0; i < s.length; i++) {
        if (!visited[i]) {
            // 未访问过
            visited[i] = true;
            // 深度优先递归
            dfs(s, visited, path + s[i], result);
            // 回溯
            visited[i] = false;
        }
    }
}

console.log(permutation('abc'));
