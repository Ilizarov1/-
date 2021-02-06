/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let visited = new Array();
    for (let i = 0; i < m; i++){//初始化标记矩阵
        let arr = new Array(n);
        for (let j = 0; j < n; j++){
            arr[j] = false;
        }
        visited.push(arr);
        
    }
    
    return dfs(0, 0, visited, k);

};
/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @param {Array} visited 
 * @param {number} k 
 */
function dfs(m, n, visited, k) {
    let sum = 0;
    let arr = [m, n];
    let cnt = 0;
    for (let i = 0; i < 2; i++){//计算位数和
        let hundred = parseInt(arr[i] / 100);
        let ten = parseInt(arr[i] / 10) - hundred * 10;
        let one = arr[i] % 10;
        sum += hundred + ten + one;
    }
    if (m < 0 || m >= visited.length || n < 0 || n >= visited[0].length || sum > k)
        return 0;//越界
    if (visited[m][n] == false ) {//符合条件标记已读
        visited[m][n] = true; cnt = 1;
        cnt+=dfs(m + 1, n, visited, k);
        cnt+=dfs(m, n + 1, visited, k);
        cnt+=dfs(m - 1, n, visited, k);
        cnt+=dfs(m, n - 1, visited, k);
    }
    return cnt;
}

console.log(movingCount(1,2,1));