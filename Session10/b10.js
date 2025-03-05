let number1 = +prompt("Nhập số ");
let dem = 0;
let number2 = 2;

while (dem < number1) {
    let soNguyen = 1;
    for (let i = 2;i <= Math.sqrt(number2);i++){
        if (number2 % i == 0) {
            soNguyen = 0;
            break;
        }
    }
    if (soNguyen) {
        document.write(`${number2}, `);
        dem++;
    }
    number2++;
}
