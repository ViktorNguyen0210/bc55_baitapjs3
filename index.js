var listNumber = [];
var listDouble = [];

function kiemTraMangRong() {
  if (listNumber.length === 0) {
    alert("Hãy nhập số vào mảng");
    return true;
  }
  return false;
}
function themSo() {
  var txtNumber = document.getElementById("txtNumber").value * 1;
  if (txtNumber == "") {
    alert("Hãy nhập số vào mảng");
    return;
  }
  listNumber.push(txtNumber);
  document.getElementById("txtNumber").value = "";
  var idListNumber = document.getElementById("idListNumber");
  idListNumber.innerHTML = listNumber;
}
function handleEnter(e) {
  if (e.key === "Enter") {
    themSo();
  }
}
var txtNumberInput = document.getElementById("txtNumber");
txtNumberInput.addEventListener("keypress", handleEnter);

// Câu 1: Tổng các số dương
function tongSoDuong() {
  var tongSoDuong = 0;
  if (kiemTraMangRong()) {
    return;
  }
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tongSoDuong += listNumber[i];
    }
  }
  var idTongCacSoDuong = document.getElementById("idTongCacSoDuong");
  idTongCacSoDuong.innerHTML = ` Tổng các số dương là: ${tongSoDuong}`;
}

// Câu 2: Đếm số dương
function demSoDuong() {
  var demSoDuong = 0;
  if (kiemTraMangRong()) {
    return;
  }
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demSoDuong += 1;
    }
  }
  var idDemSoDuong = document.getElementById("idDemSoDuong");
  idDemSoDuong.innerHTML = ` Đếm số dương: ${demSoDuong}`;
}
// Câu 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
  if (kiemTraMangRong()) {
    return;
  }
  var min = listNumber[0];

  for (let i = 1; i < listNumber.length; i++) {
    if (listNumber[i] < min) {
      min = listNumber[i];
    }
  }
  var idTimSoNhoNhat = document.getElementById("idTimSoNhoNhat");
  idTimSoNhoNhat.innerHTML = ` Số nhỏ nhất là: ${min}`;
}

// Câu 4: Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  if (kiemTraMangRong()) {
    return;
  }
  var min = Infinity;
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0 && listNumber[i] < min) {
      min = listNumber[i];
    }
  }
  if (min === Infinity) {
    var idTimSoDuongNhoNhat = document.getElementById("idTimSoDuongNhoNhat");
    idTimSoDuongNhoNhat.innerHTML = `Mảng không có số dương`;
    return;
  }

  var idTimSoDuongNhoNhat = document.getElementById("idTimSoDuongNhoNhat");
  idTimSoDuongNhoNhat.innerHTML = ` Số dương nhỏ nhất là: ${min}`;
}

// Câu 5: Tìm số chẵn cuối cùng trong mảng
function timSoChanCuoiCung() {
  if (kiemTraMangRong()) {
    return;
  }
  var soChan = Infinity;
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0 && listNumber[i] % 2 === 0) {
      soChan = listNumber[i];
    }
  }
  if (soChan === Infinity) {
    var idTimSoChanCuoiCung = document.getElementById("idTimSoChanCuoiCung");
    idTimSoChanCuoiCung.innerHTML = `Mảng không có số chẵn`;
    return -1;
  }

  var idTimSoChanCuoiCung = document.getElementById("idTimSoChanCuoiCung");
  idTimSoChanCuoiCung.innerHTML = ` Số chẵn cuối cùng trong mảng là: ${soChan}`;
}

// Câu 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiChoTheoViTri() {
  if (kiemTraMangRong()) {
    return;
  }
  var viTri1 = document.getElementById("txtNumber1").value * 1;
  var viTri2 = document.getElementById("txtNumber2").value * 1;

  if (
    viTri1 >= 0 &&
    viTri1 < listNumber.length &&
    viTri2 >= 0 &&
    viTri2 < listNumber.length
  ) {
    var tam = listNumber[viTri1];
    listNumber[viTri1] = listNumber[viTri2];
    listNumber[viTri2] = tam;
  } else {
    alert("Vị trí 1 hoặc 2 không nằm trong mảng");
  }
  var idDoiChoTheoViTri = document.getElementById("idDoiChoTheoViTri");
  idDoiChoTheoViTri.innerHTML = `Mảng sau khi đổi chỗ 2 phần tử theo vị trí là: ${listNumber}`;
}

// Câu 7: Sắp xếp mảng theo thứ tự tăng dần
function sapXepTangDan() {
  if (kiemTraMangRong()) {
    return;
  }
  for (let i = 0; i < listNumber.length - 1; i++) {
    for (let j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var tam = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = tam;
      }
    }
  }
  var idSapXepMangTangDan = document.getElementById("idSapXepMangTangDan");
  idSapXepMangTangDan.innerHTML = ` Mảng được sắp xếp tăng dần: ${listNumber}`;
}

// Câu 8: Tìm số nguyên tố đầu tiên trong mảng
function timSoNguyenToDauTien() {
  if (kiemTraMangRong()) {
    return;
  }
  for (let i = 0; i < listNumber.length; i++) {
    let num = listNumber[i];
    if (timSoNguyenTo(num)) {
      var idSoNguyenToDauTien = document.getElementById("idSoNguyenToDauTien");
      idSoNguyenToDauTien.innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${num}`;
      return;
    }
  }
}
function timSoNguyenTo(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// Câu 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanhSoLuongSoDuongVaAm(params) {
  var demSoDuong = 0;
  var demSoAm = 0;
  if (kiemTraMangRong()) {
    return;
  }
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demSoDuong += 1;
    } else {
      demSoAm += 1;
    }
  }
  var idSoSanhSoLuongSoDuongVaAm = document.getElementById(
    "idSoSanhSoLuongSoDuongVaAm"
  );
  if (demSoDuong > demSoAm) {
    idSoSanhSoLuongSoDuongVaAm.innerHTML = `Số lượng số dương lớn hơn số âm`;
  } else {
    idSoSanhSoLuongSoDuongVaAm.innerHTML = `Số lượng số âm lớn hơn số dương`;
  }
}

// Câu 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function themSoThuc() {
  var txtDouble = document.getElementById("txtDouble").value * 1;
  console.log(txtDouble);
  if (txtDouble === "") {
    alert("Hãy nhập số thực vào mảng");
    return;
  }
  listDouble.push(txtDouble);
  document.getElementById("txtDouble").value = "";
  var idListDouble = document.getElementById("idListDouble");
  idListDouble.innerHTML = listDouble;
}
function handleEnterDouble(e) {
  if (e.key === "Enter") {
    themSoThuc();
  }
}
var txtDoubleInput = document.getElementById("txtDouble");
txtDoubleInput.addEventListener("keypress", handleEnterDouble);

function kiemTraSoNguyen(number) {
  return Number.isInteger(number);
}
function kiemTraMangSoThucRong() {
  if (listDouble.length === 0) {
    alert("Hãy nhập thực số vào mảng");
    return true;
  }
  return false;
}
function demSoNguyenTrongMang() {
  var countNguyen = 0;
  if (kiemTraMangSoThucRong()) {
    return;
  }
  for (let i = 0; i < listDouble.length; i++) {
    if (kiemTraSoNguyen(listDouble[i])) {
      countNguyen += 1;
    }
  }
  var idDemSoNguyen = document.getElementById("idDemSoNguyen");
  idDemSoNguyen.innerHTML = ` Có: ${countNguyen} số nguyên trong mảng`;
}
