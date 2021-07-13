/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
	const sum = [0]
	for (let i = 1; i <= nums.length; i++) {
		sum[i] = sum[i - 1] + nums[i - 1]
	}
	const mp = new Map()
	let ans = 0
	mp.set(0, 1)
	for (let i = 0; i < nums.length; i++) {
		const r = sum[i + 1]
		const l = r - goal
		if (mp.has(l)) ans += mp.get(l)
		if (!mp.has(r)) {
			mp.set(r, 1)
		} else {
			mp.set(r, mp.get(r) + 1)
		}
	}
	return ans
}
