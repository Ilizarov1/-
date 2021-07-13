/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	const corNums = new Array(nums.length).fill(0)
	let [rep, wrn] = [0, 0]
	for (const num of nums) {
		corNums[num - 1]++
	}
	for (let i = 0; i < corNums.length; i++) {
		if (corNums[i] === 2) {
			rep = i + 1
		}
		if (corNums[i] === 0) {
			wrn = i + 1
		}
	}
	return [rep, wrn]
}
