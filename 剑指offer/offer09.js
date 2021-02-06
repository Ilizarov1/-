var CQueue = function() {
    this.s1 = [];//正向,删除用
    this.s2 = [];//辅助栈，插入用
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.s2.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.s1.length == 0) {
        //s1为空
        if (this.s2.length == 0) {
            //s2也空,栈空
            return -1;
        }
        else {
            //s2不为空，将s2中元素全部压入s1，再出栈
            let len = this.s2.length;
            for (let i = 0; i < len; i++){
                this.s1.push(this.s2.pop());
            }
            return this.s1.pop();
        }
    } else {
        //s1不为空，将s1中元素直接出栈
        return this.s1.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var o = new CQueue();
o.deleteHead();
o.appendTail(5);
o.appendTail(2);
o.deleteHead();
o.deleteHead();