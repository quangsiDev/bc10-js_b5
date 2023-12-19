/**
 * s1: lấy data từ layout ( loaiXe,soKm)
 *
 * s2: xác định số tiền mỗi km theo loaiXe user chọn
 *
 * s3: tính tiền dự vào soKm user đã đi ( theo loaiXe user chọn)
 */

function tinhGiaTienKmDauTien(loaiXe) {
  // return  về giá tiền theo từ loai xe
  if (loaiXe == "uberCar") {
    return 8000;
  }
  if (loaiXe == "uberSUV") {
    return 9000;
  }
  if (loaiXe == "uberBlack") {
    return 10000;
  }
}
function tinhGiaTienKm1Den19(loaiXe) {
  // return  về giá tiền theo từ loai xe
  //   break => kết thúc switch case => chạy tiếp đoạn code phía dưới switch nếu có

  //   return => kết thúc function ~ dừng function tại đó
  switch (loaiXe) {
    case "uberCar":
      return 7500;
    case "uberSUV":
      return 8500;
    case "uberBlack":
      return 9500;
    default: {
      console.log("Data không hợp lệ");
    }
  }
}
function tinhGiaTienKm19TroDi(loaiXe) {
  // return  về giá tiền theo từ loai xe

  switch (loaiXe) {
    case "uberCar":
      return 7000;
    case "uberSUV":
      return 8000;
    case "uberBlack":
      return 9000;
    default: {
      console.log("Data không hợp lệ");
    }
  }
}
// ' '  " "   ``
function tinhTienUber() {
  // s1
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  var soKm = document.getElementById("txt-km").value * 1;
  //   s2
  var giaTienKmDauTien = tinhGiaTienKmDauTien(loaiXe);
  var giaTienKm1Den19 = tinhGiaTienKm1Den19(loaiXe);
  var giaTienKm19TroDi = tinhGiaTienKm19TroDi(loaiXe);
  //   s3
  //  uberBlack , 25km
  var tongTien;
  if (soKm <= 1) {
    tongTien = giaTienKmDauTien * soKm;
  } else if (1 < soKm && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKm1Den19;
  } else {
    // 25   =  1 + 18 + (25-19)
    tongTien = giaTienKmDauTien + 18 * giaTienKm1Den19 + (soKm - 19) * giaTienKm19TroDi;
  }
  //   show kết quả
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("divThanhTien").innerHTML = `
  <h1>
  Số tiền cần thanh toán: ${tongTien} VND</h1>`;
}
