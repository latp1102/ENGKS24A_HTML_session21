let n = +prompt("Nhập vào số nguyên");
document.write(`các ước `);
for (let i = -n; i <= n; i++){
    if (n % i == 0){
        document.write(`${i}, `);

    }
}
