/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	return bsearch(nums, 0, nums.length - 1, target);
};
function bsearch(nums, lo, hi, tar) {
	if (lo > hi || lo < 0 || hi > nums.length) return 0;
	let mid = Math.floor((lo + hi) / 2);
	let res = 0;
	if (nums[mid] == tar) res++;
	res += bsearch(nums, lo, mid - 1, tar);
	res += bsearch(nums, mid + 1, hi, tar);
	return res;
}

console.log(search([5, 7, 7, 8, 8, 10], 8));
