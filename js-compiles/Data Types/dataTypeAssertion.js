"use strict";
/*
Type Assertion biasa di bahasa pemrograman lain biasa disebut Type Cast.
Type Assertion adalah kemampuan memberitahu compiler untuk merubah tipe data sesuai dengan kemauan kita.
Biasanya Type Assertion digunakan ketika mengakses kode JavaScript sehingga compiler tidak tahu tipe data balikan kode JavaScript tersebut.

- Pak Eko (Programmer Zaman Now)
*/
function sayHello(name) {
    return name;
}
let response1 = sayHello('6');
let response2 = sayHello('6');
let number1 = (sayHello('yadi')).length;
console.log(response1);
console.log(response2);
console.log(number1);
