var cookies = document.querySelector(".cookies");
function acceptCookies() {
  cookies.remove();
}
var highNum1 = document.getElementById("highTemp1");
var lowNum1 = document.getElementById("lowTemp1");

function toCel() {
  var toF1 = highNum1.innerText * 1.8 + 32;
  var toF2 = lowNum1.innerText * 1.8 + 32;
  highNum1.innerText = toF1;
  lowTemp1.innerText = toF2;
}
var highNum2 = document.getElementById("highTemp2");
var lowNum2 = document.getElementById("lowTemp2");

function toCel2() {
  var toF1 = highNum2.innerText * 1.8 + 32;
  var toF2 = lowNum2.innerText * 1.8 + 32;
  highNum2.innerText = toF1;
  lowTemp2.innerText = toF2;
}
var highNum3 = document.getElementById("highTemp3");
var lowNum3 = document.getElementById("lowTemp3");

function toCel3() {
  var toF1 = highNum3.innerText * 1.8 + 32;
  var toF2 = lowNum3.innerText * 1.8 + 32;
  highNum3.innerText = toF1;
  lowTemp3.innerText = toF2;
}
var highNum4 = document.getElementById("highTemp4");
var lowNum4 = document.getElementById("lowTemp4");

function toCel4() {
  var toF1 = highNum4.innerText * 1.8 + 32;
  var toF2 = lowNum4.innerText * 1.8 + 32;
  highNum4.innerText = toF1;
  lowTemp4.innerText = toF2;
}
