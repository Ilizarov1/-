/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let cnt = 0,
		candidate = nums[0]
	for (let n of nums) {
		if (n == candidate) cnt++
		else if (--cnt === 0) {
			cnt = 1
			candidate = n
		}
	}
	return candidate
}
/**
 * 摩尔投票法
 */
