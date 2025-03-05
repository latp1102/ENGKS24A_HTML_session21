let money = +prompt("Nhập số tiền")

if (money === 0){
    let minMoney = 500000;
    while(money != 0){
        let count = Math.floor(money / minMoney);
        if (count > 0){
            console.log(`${minMoney.toLocaleString()} - ${count} tờ `);
            money = money - minMoney * count;
            
        }

        if (minMoney === 500000){
            minMoney = 2000000;
        } else if (minMoney === 2000000){
            minMoney = 1000000;
        } else if (minMoney === 1000000){
            minMoney = 500000;
        } else if (minMoney= 500000){
            minMoney = 
        }
    }
}
b1
// let number1 = +prompt("Nhập vào số");
// let number2 = +prompt("Nhập vào số");
// let number3 = +prompt("Nhập vào số");
// let number4 = +prompt("Nhập vào số");
// let number5 = +prompt("Nhập vào số");
// let sum = 0;

// if (number1 % 2 == 1){
// } 
// sum = sum + number1;
// if (number2 % 2 == 1){
//     sum = sum + number2;
// }
// if (number3 % 2 == 1){
//     sum = sum + number3;

// }if (number4 % 2 == 1){
//     sum = sum + number4
// } 
// if (number5 % 2 == 1){
//     sum = sum + number5
// } 
// console.log(sum);

// b2
// let number1 = prompt("Nhập vào số");
// let number2 = prompt("Nhập vào số");
// let number3 = prompt("Nhập vào số");
// let number4 = prompt("Nhập vào số");
// let number5 = prompt("Nhập vào số");
// let le = 0;
// let chan =0;

// if(number1 % 2 == 1){
	
// 	le++;
//     } else {
//     	chan++;
// 	}
// 		if(number2 % 2 == 1){
	
// 	le++;
//     } else {
//     	chan++;	
// 	}
// 		if(number3 % 2 == 1){
	
// 	le++;
//     } else {
//     	chan++;
//     }
// 		if(number4 % 2 == 1){
	
// 	le++;
//     } else {
//     	chan++;
//     }
// 		if(number5 % 2 == 1){
	
// 	le++;
//     } else {
//     	chan++;
//     }
	
// console.log(` có sô le; ${le} ,`);
// console.log(` có sô chẵn; ${chan} ,`);

