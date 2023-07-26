/** dp, tail[index] 保留长度为index+1的子序列的最后一位数字
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const tail = [];
    nums.forEach((value) => {
        let mxIdx = 0;
        while (mxIdx < tail.length && value >= tail[mxIdx]) mxIdx++;
        if (mxIdx > 0 && tail[mxIdx - 1] >= value) {
            tail[mxIdx - 1] = value;
        } else {
            tail[mxIdx] = value;
        }
    });
    return tail.length;
};

console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
