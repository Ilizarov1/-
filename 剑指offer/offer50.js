/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	if (s == "") return " ";
	let chars = Array.from(s);
	let map = new Map();
	let idx = 0;
	for (let c of chars) {
		if (map.has(c)) {
			map.get(c).times++;
		} else {
			map.set(c, {
				index: idx,
				times: 1,
			});
		}
		idx++;
	}
	let it = map.entries();
	for (let [c, info] of it) {
		if (info.times == 1) return c;
	}
	return " ";
};
