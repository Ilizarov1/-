/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
	const menu = new Set()
	for (const o of orders) {
		if (!menu.has(o[2])) {
			menu.add(o[2])
		}
	}
	const map = new Map()
	for (const o of orders) {
		if (!map.has(o[1])) {
			const item = new Map()
			item.set(o[2], '1')
			map.set(o[1], item)
		} else {
			const item = map.get(o[1])
			if (!item.has(o[2])) {
				item.set(o[2], '1')
			} else {
				item.set(o[2], String(parseInt(item.get(o[2])) + 1))
			}
		}
	}
	const menuLst = Array.from(menu)
	menuLst.sort()
	const title = ['Table'].concat(menuLst)
	let ans = []
	for (const [key, val] of map.entries()) {
		const item = [key]
		for (const dish of menuLst) {
			if (!val.has(dish)) {
				item.push('0')
			} else {
				item.push(val.get(dish))
			}
		}
		ans.push(item)
	}
	ans.sort((a, b) => {
		return a[0] - b[0]
	})
	ans = [title].concat(ans)
	return ans
}
