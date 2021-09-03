/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix == null || matrix[0]==null) return [];
    var res = new Array();
    var leni = matrix.length;//上界
    var lenj = matrix[0].length;
    var limi=0,limj = 0;//下界
    var i = 0, j = 0;
    var flag = false;
    while (i>=limi && i<leni && j>=limj && j<lenj){
        while (j < lenj) {//右
            res.push(matrix[i][j]);
            j++;
        }
        j--; limi++; i++;
        if (!(i >= limi && i < leni && j >= limj && j < lenj)) break;
        while (i < leni) {//下
            res.push(matrix[i][j]);
            i++;
        }
        i--; lenj--; j--;
        if (!(i >= limi && i < leni && j >= limj && j < lenj)) break;
        while (j >= limj) {//左
            res.push(matrix[i][j]);
            j--;
        }
        j++; leni--; i--;
        if (!(i >= limi && i < leni && j >= limj && j < lenj)) break;
        while (i >= limi) {//上
            res.push(matrix[i][j]);
            i--;
        }
        i++; limj++; j++;

    }
    return res;
};
console.log(spiralOrder([]));