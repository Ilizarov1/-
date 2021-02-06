/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 1) return nums[0];
    let dp = new Array();
    dp[0] = nums[0];//初始化
    let max = dp[0];
    for (let i = 1; i < nums.length; i++){
        if (dp[i - 1] <= 0)
            dp[i] = nums[i];
        else
            dp[i] = dp[i - 1] + nums[i];
        
        if (dp[i] > max)
            max = dp[i];
    }
    return max;
};