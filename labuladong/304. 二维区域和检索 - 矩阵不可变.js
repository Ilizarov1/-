/**https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    if (m === 0 || n === 0) return;
    this.preSum = Array(m + 1);
    for (let i = 0; i <= m; i++) {
        this.preSum[i] = Array(n + 1).fill(0);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            this.preSum[i][j] =
                this.preSum[i - 1][j] +
                this.preSum[i][j - 1] -
                this.preSum[i - 1][j - 1] +
                matrix[i - 1][j - 1];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return (
        this.preSum[row2 + 1][col2 + 1] -
        this.preSum[row1][col2 + 1] -
        this.preSum[row2 + 1][col1] +
        this.preSum[row1][col1]
    );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
