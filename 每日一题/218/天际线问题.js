/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
	const ans = []
	const pointLst = []
	// 预处理，左边端点高度设为负值，便于排序
	for (const p of buildings) {
		const [l, r, h] = [p[0], p[1], p[2]]
		pointLst.push([l, -h])
		pointLst.push([r, h])
	}
	// 对所有的点按x坐标排列，x坐标相同则按y坐标
	pointLst.sort((a, b) => {
		if (a[0] !== b[0]) return a[0] - b[0]
		return a[1] - b[1]
	})
	const queue = []
	let prev = 0
	queue.push(prev)
	for (const p of pointLst) {
		let [point, height] = [p[0], p[1]]
		if (height < 0) {
			// 左端点高度直接进入队列
			queue.push(-height)
		} else {
			// 右端点则说明线段扫描完毕，删除该高度
			queue.splice(queue.indexOf(height), 1)
		}
		let cur = Math.max(...queue)
		// 不重合的情况可以作为答案
		if (cur != prev) {
			ans.push([point, cur])
			prev = cur
		}
	}
	return ans
}
console.log(
	getSkyline([
		[2, 9, 10],
		[3, 7, 15],
		[5, 12, 12],
		[15, 20, 10],
		[19, 24, 8]
	])
)
