let global = 200;

function fun1() {
  var1 = "Thermal";
  var var2 = 29;
  console.log(global, var1, var2);
}

function fun2() {
  y = 23;
  console.log(global, var1, y);
}
function fun3() {
  console.log(y);
}

fun1();
fun2();
fun3();
