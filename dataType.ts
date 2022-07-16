// BOOLEAN
let isDone: boolean = false;
let isMarried: boolean = true;
console.log(isDone, isMarried);

// NUMBER
let age: number = 20;
console.log(age);
// ERROR
// age = false; // typescript is strongtype
// age = "hello"; // typescript is strongtype

// STRING
let nama: string = 'Yadi Apriyadi';
nama = nama + ' Anjay';
let hello: string = `Hello ${nama}`;
console.log(hello);

// ARRAY
let names: string[] = ["Eko", "Yadi", "Andri"];
console.log(names);
let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);

// TUPLE
// adalah sebuah tipe data yang ingin dibuat lebih dari 1 type data dan terbatas.
let student: [string, string, number] = ['Yadi', 'Apriyadi', 80];
console.log(student);
let products: [string, number] = ['Pisang', 1000];
console.log(products);

// ------------ Access an Array and Tuple -------------- //

// EXAMPLE 1
// ARRAY NUMERIK
let numbers2: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers2[0]);
// TUPLE
let products2: [string, number] = ['Pisang', 1000];
console.log(products2[1]);

// EXAMPLE 2
// ARRAY NUMERIK
let numbers3: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers3[100]); // undefined
// TUPLE
let products3: [string, number] = ['Pisang', 1000];
// console.log(products3[100]); // error, bagus ini udah di kasih tau duluan sebelum running

// ------------ Changes an Array element data and Tuple element data -------------- //
// ARRAY NUMERIK
let numbers4: Array<number> = [1, 2, 3, 4, 5];
numbers4[0] = 12;
console.log(numbers4[0]);

// TUPLE
let products4: [string, number] = ['Pisang', 1000];
products4[0] = 'Banana';
console.log(products4[0]);

// ------------ Push an Array element data and Tuple element data -------------- //
// ARRAY
let myName: Array<string> = [];
myName.push('Hello');
myName.push('Yadi');
// myName.push(6); // error

console.log(myName);
console.log(myName[1]);

// TUPLE
// let myName2: [string] = []; // tidak bisa membuat initial element kosong pada tuple
let myName3: [string] = ['Yadi']; // tidak bisa membuat initial element kosong pada tuple
// myName3.push('Apriyadi'); // ini akan error
/* 
  error TS2493: Tuple type '[string]' of length '1' has no element at index '1'.
  Tuple adalah sebuah tipe data yang nilai dan tipe datanya sudah fix tidak bisa di tambah lagi
*/
console.log(myName3);

// console.log(myName3[1]); //tidak ada index 1 pada array myName3

// ------------ Push an Array element data and Tuple element data -------------- //

// ARRAY
let myName4: Array<string> = ['Yadi', 'Apriyadi'];
console.log(myName4);
delete myName4[0];
console.log(myName4);

// TUPLE
let products5: [string, number] = ['Pisang', 1000];
// delete products5[0]; // tidak bisa di hapus, karena tuple fix harus wajib di isi jangan kosong
console.log(products5[1]);