/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	const letters = new Map()
	for (const letter of s) {
		if (!letters.has(letter)) {
			letters.set(letter, 1)
		} else {
			let update = letters.get(letter)
			update++
			letters.set(letter, update)
		}
	}
	const arr = Array.from(letters)
	arr.sort((a, b) => {
		return b[1] - a[1]
	})
	let res = ''
	for (const item of arr) {
		while (item[1]-- > 0) {
			res += item[0]
		}
	}
	return res
}
