/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s == "") return 0;
	if (s == "") return 1;
	let map = new Map();
	let chars = Array.from(s);
	let res = 0;
	let pre = 0;
	let tmp = 0;
	for (let i = 0; i < chars.length; i++) {
		if (!map.has(chars[i])) {
			map.set(chars[i], i);
		} else {
			pre = Math.max(map.get(chars[i]) + 1, pre);
			map.set(chars[i], i);
		}
		res = i - pre + 1 > res ? i - pre + 1 : res;
	}
	return res;
};
console.log(lengthOfLongestSubstring("pwwke"));
