// interface digunakan untuk membuat type secara explicit dan bisa di pakai berkali kali pada variable atau function yang kita ingin type kan

interface Student {
  nim: string,
  name: string
}

// Apabila sebuah interface yang sudah di buat maka haruslah mengandung apa yang di miliki dari interface tersebut.

let student1: Student = {
  name: 'Yadi Apriyadi',
  nim: '10082894798273012'
}

console.log(student1);

/*
let student2: Student = {
  name: 'Andri Sukma'
}

Ini bakalan error karena property nim tidak di buat
*/
