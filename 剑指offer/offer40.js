/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
	let privot_idx = partition(arr, 0, arr.length - 1);
	while (privot_idx != k) {
		if (privot_idx < k)
			privot_idx = partition(arr, privot_idx + 1, arr.length - 1);
		else if (privot_idx > k) privot_idx = partition(arr, 0, privot_idx - 1);
	}
	if (k == 0) {
		let res = new Array();
		res.push(arr[0]);
	}
	return arr.slice(0, k);
};
function partition(arr, low, high) {
	let privot = arr[low];
	while (low < high) {
		while (low < high && arr[high] >= privot) high--;
		arr[low] = arr[high];
		while (low < high && arr[low] <= privot) low++;
		arr[high] = arr[low];
	}
	arr[low] = privot;
	return low;
}
console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8));
