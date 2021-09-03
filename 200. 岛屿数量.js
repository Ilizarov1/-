/**
 *
 * @param {character[][]} grid
 * @param {Number} r
 * @param {number} c
 */
const isArea = (grid, r, c) => {
	if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
		return true
	} else return false
}

const isIsland = (grid, r, c) => {
	if (grid[r][c] === '1') return true
	else return false
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let cnt = 0
	const dfs = (startR, startC) => {
		// 从起始坐标开始深度搜索
		if (!isArea(grid, startR, startC)) {
			// 越界就返回
			return
		}

		if (!isIsland(grid, startR, startC)) {
			// 不是陆地就返回
			return
		}

		// 标记已经遍历
		grid[startR][startC] = 'y'

		// 深度搜索
		dfs(startR + 1, startC)
		dfs(startR - 1, startC)
		dfs(startR, startC + 1)
		dfs(startR, startC - 1)
	}

	// 对全图进行深度搜索
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] === '1') {
				dfs(r, c)
				cnt++
			}
		}
	}

	return cnt
}

numIslands([
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0']
])
