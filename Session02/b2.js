let chan = 0;
let le = 0;

for (let i = 0;i < 5;i++){
	let number = +prompt("Nhập vào số");
	if (number % 2 == 1) {
		le++;
	} else {
		chan++;
	}
}
document.write(`số chẵn ${chan}`,"<br>")
document.write(`số lẻ ${le}`)