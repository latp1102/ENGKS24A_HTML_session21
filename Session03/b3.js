let pass = "12345678"; 

for (let i = 0;i < 1;i++) { 
    passwordInput = prompt("nhập mật khẩu"); 
    if (passwordInput === pass) { 
        document.write("đăng nhập thành công"); 
    } else { 
        document.write("sai mật khấu"); 
    } 
}