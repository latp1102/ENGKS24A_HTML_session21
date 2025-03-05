for (let i = 100;i <= 999; i++) {
	let sum = 0;
	let a = i;

	while (a > 0) {
		let number1 = a % 10;
		sum += Math.pow(number1, 3);
		a = Math.floor(a/10);
	}
	if (sum == i) {
		document.write(`${i}, `);
	}
}