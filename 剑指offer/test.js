const sum = (n) => {
	if (n == 1) return 1;
	return n * sum(n - 1);
};
console.log(sum(2));

const sum2 = function (n) {
	if (n == 1) return 1;
	return n * arguments.callee(n - 1);
};
console.log(sum2(2));
