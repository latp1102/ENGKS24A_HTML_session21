let sum = 0;

for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập vào số");
    if (number % 2 == 1) { 
        sum += number;
    }
}
document.write(`tổng lẻ ${sum}`);