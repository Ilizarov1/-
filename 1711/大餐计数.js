/**
 * @param {number[]} deliciousness
 * @return {number}
 */
// var countPairs = function (deliciousness) {
// 	let cnt = 0
// 	for (let i = 0; i < deliciousness.length; i++) {
// 		for (let j = i + 1; j < deliciousness.length; j++) {
// 			if (istwo(deliciousness[i] + deliciousness[j])) cnt++
// 		}
// 	}
// 	const a = Math.pow(10, 9) + 7
// 	return cnt % a
// }
// function istwo(num) {
// 	if (num === 0) return false
// 	return (num & (num - 1)) === 0
// }
const test = require('./testcase')
var countPairs = function (deliciousness) {
	const mp = new Map()
	for (const i of deliciousness) {
		if (!mp.has(i)) {
			mp.set(i, 1)
		} else {
			mp.set(i, mp.get(i) + 1)
		}
	}
	let ans = 0
	let max = 1 << 22
	for (const [key, val] of mp.entries()) {
		for (let i = 1; i < max; i <<= 1) {
			let t = i - key
			if (mp.has(t)) {
				if (t === key) {
					ans += (val - 1) * val
				} else ans += val * mp.get(t)
			}
		}
	}
	ans = ans / 2
	let a = Math.pow(10, 9) + 7
	return ans % a
}
const old = 9999900000
const bit = old >> 1
const divide = old / 2
console.log('old:' + old)
console.log('bit:' + bit)
console.log('divide:' + divide)
console.log(1 << 22)
