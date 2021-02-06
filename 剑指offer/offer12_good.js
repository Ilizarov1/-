/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    var rows = board.length;
    var cols = board[0].length;
    var words = Array.from(word);
    for (let i = 0; i < rows; i++){
        for (let j = 0;j<cols; j++){//dfs
            if(dfs(i, j, 0))return true;
        }
    }
    return false;
    function dfs(i, j, k) {
        if (i >= rows || i < 0 || j >= cols || j < 0 || board[i][j] != words[k])
            return false;
        if (k == words.length - 1)
            return true;
        board[i][j] = null;//标记已查
        let res = dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) ||
            dfs(i - 1, j, k + 1) || dfs(i, j - 1, k + 1);
        board[i][j] = word[k];//回溯
        return res;
    }
    
};