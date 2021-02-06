/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	let res = 0;
	const sum = (n) => {
		let x = n > 1 && sum(n - 1) > 0;
		res += n;
	};
	sum(n);
	return res;
};
console.log(sumNums(2));
