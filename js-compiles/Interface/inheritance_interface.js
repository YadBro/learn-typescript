"use strict";
// ini sama seperti inheritance pada oop
let andri = {
    name: 'Andri Sukma',
    password: 'andri ganteng pisan',
};
console.log(andri);
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
// Mesti di ingat interface hanya bisa mengextends sebuah interface lainnya saja tidak dengan yang lain seperti enum dll.
// Tetapi untuk property bisa di combine dengan enum
let udin = {
    name: 'Udin Terpesona',
    age: 15,
    // gender: 'Male', // ini akan error karena tipe data gender sudah di combine dengan enum Gender
    gender: Gender.Male,
    nik: 213123,
    numberCard: 123213,
};
console.log(udin);
/*
// Yang di extends wajib di masukkan property dari extends tersebut kecuali dari extends tersebut ada optional property
let mamang: Students = {
  name: 'Mamang Ganteng',
  age: 20,
  gender: Gender.Female
}

console.log(mamang);
*/ 
