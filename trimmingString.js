function trim(str, size) {
	let result = " ";

	if (str.length < size) {
		return str;
	}

	if (str.length > 3) {
		size -= 3;
	}

	for (let i = 0; i < size; i++) {
		result += str[i];
	}

	return result + "...";
}
const a = trim("Brian", 4);

console.log(a);
