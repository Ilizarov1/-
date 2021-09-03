/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let lo = 0;
	let hi = nums.length - 1;
	let mid = 0;
	while (lo <= hi) {
		mid = Math.floor((lo + hi) / 2);
		if (nums[mid] == mid) lo = mid + 1;
		else hi = mid - 1;
	}
	return lo;
};
