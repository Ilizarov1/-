/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
	const elem = []
	elem.push(new Map())
	for (let i = 0; i < formula.length; i++) {
		if (formula[i] === '(') {
			elem.push(new Map())
		} else if (formula[i] === ')') {
			let cnt = 0
			if (
				i + 1 < formula.length &&
				formula[i + 1] >= '0' &&
				formula[i + 1] <= '9'
			) {
				while (
					i + 1 < formula.length &&
					formula[i + 1] >= '0' &&
					formula[i + 1] <= '9'
				) {
					cnt = cnt * 10 + parseInt(formula[i + 1])
					i++
				}
			} else {
				cnt = 1
			}
			const mp = elem.pop()
			for (let [key, value] of mp.entries()) {
				value = value * cnt
				const top = elem[elem.length - 1]
				if (!top.has(key)) {
					top.set(key, 0)
				}
				top.set(key, top.get(key) + value)
			}
		} else {
			let sign = i
			while (
				i + 1 < formula.length &&
				formula[i + 1] >= 'a' &&
				formula[i + 1] <= 'z'
			) {
				i++
			}
			let str = ''
			for (let j = sign; j <= i; j++) {
				str += formula[j]
			}
			let cnt = 0
			if (
				i + 1 < formula.length &&
				formula[i + 1] >= '0' &&
				formula[i + 1] <= '9'
			) {
				while (
					i + 1 < formula.length &&
					formula[i + 1] >= '0' &&
					formula[i + 1] <= '9'
				) {
					cnt = cnt * 10 + parseInt(formula[i + 1])
					i++
				}
			} else {
				cnt = 1
			}
			const mp = elem.pop()
			if (!mp.has(str)) {
				mp.set(str, cnt)
			} else {
				mp.set(str, cnt + mp.get(str))
			}

			elem.push(mp)
		}
	}
	let ans = ''
	const mp = elem.pop()
	const arr = Array.from(mp)
	arr.sort((a, b) => {
		let a_key = a[0]
		let b_key = b[0]
		if (a_key > b_key) {
			return 1
		} else if (a_key < b_key) {
			return -1
		} else {
			return 0
		}
	})
	for (const [key, value] of arr) {
		let str = ''
		if (value === 1) {
			str = key
		} else {
			str = key + String(value)
		}
		ans += str
	}
	return ans
}
console.log(countOfAtoms('H11He49NO35B7N46Li20'))
