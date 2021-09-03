/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
	let chars = Array.from(str)
	let flag = false //是否找到第一个数字
	let sgn = 0 //符号位
	let res = 0
	let int_max = Math.pow(2, 31) - 1
	let int_min = Math.pow(2, 31)
	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === ' ') {
			if (!flag) continue
			else break
		} else {
			if (chars[i] === '+') {
				if (!flag) {
					sgn = 0
					flag = true
				} else break
			} else if (chars[i] === '-') {
				if (!flag) {
					sgn = 1
					flag = true
				} else break
			} else if (
				chars[i].charCodeAt(0) >= '0'.charCodeAt(0) &&
				chars[i].charCodeAt(0) <= '9'.charCodeAt(0)
			) {
				if (!flag) {
					flag = true
					res = chars[i].charCodeAt(0) - '0'.charCodeAt(0)
				} else {
					let tmp =
						res * 10 + chars[i].charCodeAt(0) - '0'.charCodeAt(0)
					if (tmp >= int_max) {
						if (sgn === 0) return int_max
						else {
							if (tmp >= int_min) return -int_min
							else return -int_max
						}
					} else {
						res = tmp
					}
				}
			} else if (
				chars[i].charCodeAt(0) < '0'.charCodeAt(0) ||
				chars[i].charCodeAt(0) > '9'.charCodeAt(0)
			) {
				if (flag) {
					if (sgn === 0) return res
					else return -res
				} else {
					return 0
				}
			}
		}
	}
	if (sgn === 0) return res
	else return -res
}

console.log(strToInt('-13+8'))
