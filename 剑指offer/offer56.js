/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	let [x, y, n, m] = [0, 0, 0, 1];
	for (let num of nums) {
		n = n ^ num;
	}
	while ((n & m) == 0) m <<= 1;
	for (let num of nums) {
		if ((num & m) != 0) x ^= num;
		else y ^= num;
	}
	return [x, y];
};
console.log(singleNumbers([4, 1, 4, 6]));
