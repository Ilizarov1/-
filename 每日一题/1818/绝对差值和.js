/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
	const d = Math.pow(10, 9) + 7
	// 复制一份nums1，并排序，用于二分查找
	const nums1Sorted = Array.from(nums1)
	nums1Sorted.sort((a, b) => a - b)
	let [sum, max] = [0, 0]
	// 遍历求和
	for (let i = 0; i < nums1.length; i++) {
		let [a, b] = [nums1[i], nums2[i]]
		// 相等情况绝对值最小，直接跳过
		if (a === b) continue
		// 计算原绝对值差
		let x = Math.abs(a - b)
		// 求和
		sum += x
		// 二分，从排序好的数组中找到与nums2[i]最接近的数值
		let [l, r] = [0, nums1.length - 1]
		while (l < r) {
			const mid = Math.floor((l + r + 1) / 2)
			if (nums1Sorted[mid] <= b) l = mid
			else r = mid - 1
		}
		// 计算新绝对值差
		let nd = Math.abs(nums1Sorted[r] - b)
		// 由于是寻找最接近的值而不是相等的值，所以要考虑分割点下一个的值，获得新绝对值差
		if (r + 1 < nums1.length)
			nd = Math.min(Math.abs(nums1Sorted[r + 1] - b), nd)
		// 找到差距最大那一个，保证结果最小
		if (nd < x) max = Math.max(max, x - nd)
	}
	return (sum - max) % d
}
console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]))
