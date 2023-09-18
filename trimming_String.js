function trim(str, size) {
	let result = " ";

	if (str.length <= size) {
		return str;
	}

	if (str.length > 3) {
		size -= 3;
	}

	for (let i = 0; i < size; i++) {
		result += str[i];
	}
	console.log(result);

	return result + "...";
}
trim("Brian Prado", 14);
