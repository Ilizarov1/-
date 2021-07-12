/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	const n = citations.length
	let l = 0
	let r = n - 1
	while (l < r) {
		let mid = Math.floor((l + r) / 2)
		if (citations[mid] >= n - mid) r = mid
		else l = mid + 1
	}
	return citations[r] >= n - r ? n - r : 0
}
