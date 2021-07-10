/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
	this.mp = new Map()
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
	const stamp = new Map()
	if (!this.mp.has(key)) {
		stamp.set(timestamp, value)
		this.mp.set(key, stamp)
	} else {
		const temp = this.mp.get(key)
		temp.set(timestamp, value)
	}
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
	if (!this.mp.has(key)) {
		return ''
	} else {
		const stamp = this.mp.get(key)
		if (stamp.has(timestamp)) {
			return stamp.get(timestamp)
		} else {
			for (let i = timestamp - 1; i >= 1; i--) {
				if (stamp.has(i)) return stamp.get(i)
			}
			return ''
		}
	}
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
