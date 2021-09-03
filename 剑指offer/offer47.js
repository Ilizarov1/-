/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array();
    for (let i = 0; i < m; i++)
        dp.push(new Array(n));
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (i == 0 && j==0) {
                dp[i][j] = grid[i][j];
            } else if (i == 0 && j != 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            } else if (j == 0 && i != 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else if (j != 0 && i != 0) {
                maximum = dp[i][j - 1] > dp[i - 1][j] ? dp[i][j - 1] : dp[i - 1][j];
                dp[i][j] = maximum + grid[i][j];
            }

        }
    }
    return dp[m - 1][n - 1];
};
console.log(maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));
