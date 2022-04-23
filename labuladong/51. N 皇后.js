/** https://leetcode-cn.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // 初始化棋盘
    const board = Array(n);
    for (let i = 0; i < n; i++) board[i] = Array(n).fill('.');
    const res = [];
    // 回溯算法
    function backtrack(row) {
        // 超过最后一行，退出
        if (row === n) {
            const tmp = [];
            for (const row of board) {
                tmp.push(row.join(''));
            }
            res.push(tmp);
            return;
        }

        for (let col = 0; col < n; col++) {
            // 排除不合法选择
            if (!isValid(row, col)) continue;

            // 做选择
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.';
        }
    }
    // 是否可以在 [row][col]放置皇后
    function isValid(row, col) {
        // 检查当前列是否有冲突
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // 检查右上方是否有冲突
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        //检查左上方是否有冲突
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
        // 因为还没放下面所以不检查下面的棋盘
    }
    backtrack(0);
    return res;
};
console.log(solveNQueens(4));
