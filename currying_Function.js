function multiplyAll(array) {
	return function (multiplier) {
		return array.map((e) => e * multiplier);
	};
}

const result = multiplyAll([1, 2])(2);
console.log(result);
