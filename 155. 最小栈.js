/**
 * initialize your data structure here.
 */
class MinStack {
	constructor() {
		this.stack = new Array()
		this.min_stack = new Array()
	}

	/**
	 * @param {number} x
	 * @return {void}
	 */
	push(x) {
		if (this.stack.length === 0) {
			this.stack.push(x)
			this.min_stack.push(x)
		} else {
			if (this.min_stack[this.min_stack.length - 1] >= x) {
				this.min_stack.push(x)
			}
			this.stack.push(x)
		}
	}

	/**
	 * @return {void}
	 */
	pop() {
		let top = this.stack[this.stack.length - 1]
		if (top === this.min_stack[this.min_stack.length - 1]) {
			this.min_stack.pop()
		}
		return this.stack.pop()
	}
	/**
	 * @return {number}
	 */
	top() {
		return this.stack[this.stack.length - 1]
	}
	/**
	 * @return {number}
	 */
	getMin() {
		return this.min_stack[this.min_stack.length - 1]
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * 单调辅助栈
 */
