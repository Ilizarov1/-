/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	s = s.trim();
	let pattern = /\s{2,}/g;
	s = s.replace(pattern, ' ');
	return s.split(' ').reverse().join(' ');
};
console.log(reverseWords('a good   example'));
