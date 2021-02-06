/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        if (!map.has(nums[i]))
            map.set(nums[i], 1);
        else map.set(nums[i], map.get(nums[i]) + 1);
    }
    let half = nums.length / 2; let min;
    let iterator = map.entries();
    for (let [num, times] of iterator) {
        if (times > half) min = num;
        console.log(num + " " + times);
    }
    return min;
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
