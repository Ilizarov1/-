/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	const n = citations.length
	let l = 0
	let r = n
	while (l < r) {
		let mid = Math.floor((l + r + 1) / 2)
		if (check(citations, mid)) l = mid
		else r = mid - 1
	}
	return r
}
function check(cs = [], mid) {
	let ans = 0
	for (const i of cs) {
		if (i >= mid) ans++
	}
	return ans >= mid
}
