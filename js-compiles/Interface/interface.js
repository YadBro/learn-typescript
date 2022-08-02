"use strict";
// interface digunakan untuk membuat type secara explicit dan bisa di pakai berkali kali pada variable atau function yang kita ingin type kan
// Apabila sebuah interface yang sudah di buat maka haruslah mengandung apa yang di miliki dari interface tersebut.
let student1 = {
    name: 'Yadi Apriyadi',
    nim: '10082894798273012'
};
console.log(student1);
let riceCook = {
    vitamin: '0%',
    name: 'Nasi Goreng'
};
// ini tidak akan error seperti yang tadi di atas karena kita menggunakan ? atau optional property
console.log(riceCook);
let Ms_Ana = {
    name: 'Ana Zannatu Uzlifat',
    numberWa: 1020098231,
};
let Mr_Jana = {
    name: 'Jana Wijanarko',
    numberWa: 231839783
};
Ms_Ana.numberWa = 123123; // Success
console.log(Ms_Ana);
console.log(Mr_Jana);
/*
Mr_Jana.numberWa = 2938103; // Ini akan error: Cannot assign to 'numberWa' because it is a read-only property
console.log(Mr_Jana);
*/
