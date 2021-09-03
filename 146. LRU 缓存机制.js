class LRUCache {
	constructor(capacity) {
		this.map = new Map()
		this.capacity = capacity
	}

	get(key) {
		let val = this.map.get(key)
		if (val === undefined) {
			return -1
		} else {
			this.map.delete(key)
			this.map.set(key, val)
			// 更新，使其在迭代器中排在首位
			return val
		}
	}
	put(key, value) {
		if (this.map.has(key)) {
			this.map.delete(key)
		}
		this.map.set(key, value)
		if (this.map.size > this.capacity) {
			// 迭代器按序返回，第一个就是最久的那一个(value:[key,value])
			this.map.delete(this.map.entries().next().value[0])
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
