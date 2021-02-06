/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    if (nums.length == 0) return nums;
    let privot = nums[0];
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        while (low < high && nums[high] % 2 == 0)
            high--;
        nums[low] = nums[high];
        while (low < high && nums[low] % 2 == 1)
            low++;
        nums[high] = nums[low];
    }
    nums[low] = privot;
    return nums;
};