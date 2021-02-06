/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
	if (a.length == 0) return [];
	let b = new Array();
	b[0] = 1;
	let tmp = 1;
	for (let i = 1; i < a.length; i++) {
		tmp *= a[i - 1];
		b[i] = tmp;
	}
	tmp = 1;
	for (let i = a.length - 2; i >= 0; i--) {
		tmp *= a[i + 1];
		b[i] *= tmp;
	}
	return b;
};
