/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
	let chs = Array.from(s);
	// console.log(chs);
	let remove = chs.splice(0, n);
	// console.log(remove);
	for (let i = 0; i < n; i++) chs.push(remove[i]);
	return chs.join('');
};
console.log(reverseLeftWords('abcdefg', 2));
