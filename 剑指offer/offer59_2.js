var MaxQueue = function () {
	this.q1 = new Array();
	this.q2 = new Array();
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	if (this.q1.length == 0) return -1;
	return this.q2[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	this.q1.push(value);
	if (this.q2.length == 0) this.q2.push(value);
	else {
		if (value <= this.q2[this.q2.length - 1]) this.q2.push(value);
		else {
			while (this.q2[this.q2.length - 1] < value) {
				this.q2.pop();
			}
			this.q2.push(value);
		}
	}
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (this.q1.length == 0) return -1;
	let res = this.q1.shift();
	if (res == this.q2[0]) this.q2.shift();
	return res;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
