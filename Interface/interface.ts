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

// OPTIONAL PROPERTY

interface Foods {
  vitamin: string,
  zat_besi?: string, // apabila ada tanda tanya maka ini optional. Dan bebas mau di deklarasikan atau tidak nantinya di instance barunya
  name: string,
}

let riceCook: Foods = {
  vitamin: '0%',
  name: 'Nasi Goreng'
}
// ini tidak akan error seperti yang tadi di atas karena kita menggunakan ? atau optional property

console.log(riceCook);

// ReadOnly Property
// use keyword readonly for declare a property
interface Teacher {
  name: string,
  numberWa?: number; // apabila ada tanda tanya maka ini optional. Dan bebas mau di deklarasikan atau tidak nantinya di instance barunya
}

let Ms_Ana: Teacher = {
  name: 'Ana Zannatu Uzlifat',
  numberWa: 1020098231,
}

interface ReadOnlyTeacher {
  name: string,
  readonly numberWa?: number;
}

let Mr_Jana: ReadOnlyTeacher = {
  name: 'Jana Wijanarko',
  numberWa: 231839783
}

Ms_Ana.numberWa = 123123; // Success
console.log(Ms_Ana);
console.log(Mr_Jana);

/*
Mr_Jana.numberWa = 2938103; // Ini akan error: Cannot assign to 'numberWa' because it is a read-only property
console.log(Mr_Jana);
*/
