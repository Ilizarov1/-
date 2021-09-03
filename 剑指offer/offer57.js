/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let lo = 0,
		hi = nums.length - 1;
	while (lo < hi) {
		while (target - nums[hi] < nums[lo]) hi--;
		while (target - nums[lo] > nums[hi]) lo++;
		if (target - nums[lo] == nums[hi]) return [nums[lo], nums[hi]];
	}
	return [];
};
