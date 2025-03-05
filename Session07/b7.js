let tienBanDau = +prompt("Nhập tiền ban đầu");
let laiSuat = +prompt("Nhập lãi suất");
let soThang = +prompt("Nhập số tháng");
let tienLai = 0;
tienLai = tienBanDau * Math.pow((1 + laiSuat/100) , soThang);

tienBanDau = tienLai - tienBanDau; 
console.log(tienBanDau);
console.log(tienLai);