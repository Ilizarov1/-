/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
	let lo = 1,
		hi = 2;
	let ret = new Array();
	while (lo < hi) {
		let sum = ((lo + hi) * (hi - lo + 1)) / 2;
		if (sum < target) hi++;
		//向右滑动
		else if (sum > target) lo++;
		//减小窗口
		else if (sum == target) {
			let tmp = new Array();
			for (let i = lo; i <= hi; i++) tmp.push(i);
			ret.push(tmp);
			lo++; //继续滑动
		}
	}
	return ret;
};
console.log(findContinuousSequence(9));
