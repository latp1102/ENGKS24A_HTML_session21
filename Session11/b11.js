let day = +prompt("Nhập vào ngày sinh:");
let month = +prompt("Nhập vào tháng sinh:");

switch (month) {
  case 1:
    if (day <= 19) {
      document.write("ma kết");
    } else {
      document.write("bảo bình");
    }
    break;
  case 2:
    if (day <= 18) {
      document.write("bảo bình");
    } else {
      document.write("song ngư");
    }
    break;
  case 3:
    if (day <= 20) {
      document.write("song ngư");
    } else {
      document.write("bạch dương");
    }
    break;
  case 4:
    if (day <= 20) {
      document.write("bạch dương");
    } else {
      document.write("kim ngưu");
    }
    break;
  case 5:
    if (day <= 20) {
      document.write("kim ngưu");
    } else {
      document.write("song yử");
    }
    break;
  case 6:
    if (day <= 21) {
      document.write("song tử");
    } else {
      document.write("cự giải");
    }
    break;
  case 7:
    if (day <= 22) {
      document.write("cự giải");
    } else {
      document.write("sư tử");
    }
    break;
  case 8:
    if (day <= 22) {
      document.write("sư tử");
    } else {
      document.write("xử nữ");
    }
    break;
  case 9:
    if (day <= 22) {
      document.write("xử nữ");
    } else {
      document.write("thiên bình");
    }
    break;
  case 10:
    if (day <= 23) {
      document.write("thiên bình");
    } else {
      document.write("bọ cạp");
    }
    break;
  case 11:
    if (day <= 22) {
      document.write("bọ cạp");
    } else {
      document.write("nhân mã");
    }
    break;
  case 12:
    if (day <= 21) {
      document.write("nhân mã");
    } else {
      document.write("ma kết");
    }
    break;
  default:
    document.write("tháng không hợp lệ");
}
