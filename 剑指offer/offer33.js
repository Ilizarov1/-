/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    return isBST(postorder, 0, postorder.length - 1);
    
};
/**
 * 
 * @param {number[]} postorder 
 * @param {number} low 
 * @param {number} high 
 */
function isBST(postorder, low, high) {
    if (low >= high)
        return true;
    let p = low;
    while (postorder[p] < postorder[high])//左子树全部小于根
        p++;
    let m = p;
    while (postorder[p] > postorder[high])//右子树全部大于根
        p++;
    return p == high && arguments.callee(postorder, low, m - 1) &&
        arguments.callee(postorder, m, high - 1);

}