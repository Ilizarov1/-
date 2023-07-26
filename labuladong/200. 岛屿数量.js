/** https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;
    const pos = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1]
    ];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                // 淹没连接的陆地
                flood(i, j);
            }
        }
    }

    function flood(row, col) {
        // base case
        if (row < 0 || col < 0 || row >= m || col >= n) {
            return;
        }
        if (grid[row][col] === '0') {
            return;
        }
        // 淹成海洋
        grid[row][col] = '0';
        for (const [dx, dy] of pos) {
            let [newX, newY] = [row + dx, col + dy];
            flood(newX, newY);
        }
    }
    return res;
};
console.log(
    numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
    ])
);
