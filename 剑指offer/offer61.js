/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
	let set = new Set();
	let min = 15,
		max = -1;
	for (let num of nums) {
		if (num == 0) continue;
		else {
			if (set.has(num)) return false;
			else {
				set.add(num);
				if (num < min) min = num;
				if (num > max) max = num;
			}
		}
	}
	if (max - min < 5) return true;
	else return false;
};
