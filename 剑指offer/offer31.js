/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	let arr = new Array();
	let i = 0;
	for (let j = 0; j < pushed.length; j++) {
		arr.push(pushed[j]);
		while (arr.length != 0 && arr[arr.length - 1] == popped[i]) {
			arr.pop();
			i++;
		}
	}
	if (arr.length == 0) return true;
	else return false;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
