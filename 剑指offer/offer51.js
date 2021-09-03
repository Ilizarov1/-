/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
	if (nums.length <= 1) return 0;
	let tmp = new Array();
	let cnt = reverseNum(nums, 0, nums.length - 1, tmp);
	return cnt;
};
function reverseNum(nums, lo, hi, tmp) {
	if (lo == hi) return 0;
	let mid = Math.floor((lo + hi) / 2);
	let leftCnt = reverseNum(nums, lo, mid, tmp);
	let rightCnt = reverseNum(nums, mid + 1, hi, tmp);
	let crsCnt = 0;
	if (nums[mid] >= nums[mid + 1]) {
		crsCnt = merge(nums, lo, mid, hi, tmp);
	}
	return leftCnt + rightCnt + crsCnt;
}
function merge(nums, lo, mid, hi, tmp) {
	let crsCnt = 0;
	let i = lo;
	let j = mid + 1;
	let k = 0;
	while (i <= mid && j <= hi) {
		if (nums[i] <= nums[j]) {
			tmp[k++] = nums[i++];
		} else {
			tmp[k++] = nums[j++];
			crsCnt += mid - i + 1;
		}
	}
	while (i <= mid) tmp[k++] = nums[i++];
	while (j <= hi) tmp[k++] = nums[j++];
	k = 0;
	for (let w = lo; w <= hi; w++) {
		nums[w] = tmp[k++];
	}
	return crsCnt;
}
console.log(reversePairs([1, 3, 2, 3, 1]));
