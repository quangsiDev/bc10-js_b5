// hàm không có tham số
function sayHello() {
  console.log("hello");
  console.log("have a good day");
}

// gọi hàm chạy => name()

sayHello();
sayHello();
sayHello();

// hàm  có tham số ~ params

function sayHelloByName(name) {
  console.log(`hello ${name}`);
  console.log("have a good day");
}
sayHelloByName("Alice");
sayHelloByName("Toomy");
// hàm có giá trị trả về

function tinhTong(a, b) {
  var sum = a + b;
  return sum;
}

var result1 = tinhTong(3, 5);
console.log("😀 - result1", result1);

/**
 *
 */
