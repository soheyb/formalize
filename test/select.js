var ok = function (x) {if (!x) throw new Error(x + ' is not ok')},
    eq = function (x, y) {if (x !== y) throw new Error(x + ' not equal ' + y)},
    s = function (x) {eq(Object.prototype.toString.call(x), '[object String]')},
    f = function (x) {eq(Object.prototype.toString.call(x), '[object Function]')},
    a = function (x) {eq(Object.prototype.toString.call(x), '[object Array]')},
    b = function (x) {eq(Object.prototype.toString.call(x), '[object Boolean]')},
    o = function (x) {eq(Object.prototype.toString.call(x), '[object Object]')};

var Select = require('formalize').Select;
var elements = document.querySelectorAll('.my.select');
var selectElement = document.querySelector('.my.select');

for (var i = 0; i < elements.length; i++) {
  new Select(elements.item(i));
}

s(selectElement.type)
s(selectElement.name)
s(selectElement.value)
b(selectElement.selectedIndex)
b(selectElement.disabled)
ok(selectElement.form)
eq(selectElement.selectedIndex, 2)
