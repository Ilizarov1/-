/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = new Array();
    this.stack_min = new Array();
    this.base = 0;
    this.base_min = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.base_min == 0 || this.stack_min[this.base_min - 1] >= x) {
        this.stack_min[this.base_min]=x;
        this.base_min++;
    }
    this.arr[this.base]=x;
    this.base++;

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.base--;
    if (this.base < 0) return null;
    if (this.stack_min[this.base_min - 1] == this.arr[this.base])
        this.base_min--;
    return this.arr[this.base];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.base - 1 < 0) return null;
    return this.arr[this.base - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    
    if (this.base_min - 1 < 0) return null;
    return this.stack_min[this.base_min - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
var obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
obj.top();
obj.pop();
obj.min();
obj.pop();
obj.min();
obj.pop();
obj.push(2147483647);
obj.top();
obj.min();
obj.push(-2147483648);
obj.top();
obj.min();
obj.pop();
obj.min();
console.log(obj.min());
