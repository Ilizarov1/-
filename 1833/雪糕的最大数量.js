/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
	costs.sort((a, b) => {
		return a - b
	})
	let expense = 0
	let cnt = 0
	for (const price of costs) {
		if (price + expense > coins) {
			break
		}
		expense += price
		cnt++
	}
	return cnt
}

// const costs = [1, 3, 2, 4, 1]
// const coins = 7
// const costs = [10, 6, 8, 7, 7, 8]
// const coins = 5
const costs = [1, 6, 3, 1, 2, 5]
const coins = 20
console.log(maxIceCream(costs, coins))
