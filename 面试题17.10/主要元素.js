/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let ans = 0
	let cnt = 0
	for (const n of nums) {
		if (cnt === 0) {
			ans = n
		}
		if (ans === n) cnt++
		else cnt--
	}
	cnt = 0
	for (const n of nums) {
		if (ans === n) cnt++
	}
	if (cnt > nums.length / 2) return ans
	else return -1
}
