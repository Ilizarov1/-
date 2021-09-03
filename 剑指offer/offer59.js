/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	let ret = new Array();
	let q = new Array();
	let j = 0;
	let i = j - k + 1;
	for (; j < nums.length; j++) {
		if (i < 0) {
			if (j == 0) {
				q.push(nums[j]);
				i++;
			} else {
				i++;
				if (q.length == 0 || nums[j] <= q[q.length - 1])
					q.push(nums[j]);
				else {
					while (nums[j] > q[q.length - 1]) q.pop();
					q.push(nums[j]);
				}
			}
		} else {
			if (q.length == 0 || nums[j] <= q[q.length - 1]) q.push(nums[j]);
			else {
				while (nums[j] > q[q.length - 1]) q.pop();
				q.push(nums[j]);
			}

			ret.push(q[0]);
			if (q[0] == nums[i++]) q.shift();
		}
	}
	return ret;
};
console.log(maxSlidingWindow([1, -1], 1));
