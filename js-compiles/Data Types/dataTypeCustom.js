"use strict";
function BloodTypeCheck(bt) {
    console.log(bt);
    return bt;
}
let myBloodType = BloodTypeCheck("A");
// let yourBloodType: BloodType = 'y'; // wrong because typescript are strongtype language
// dan juga kalo tidak ada nilai yang sudah di set di tipe data custom maka kalo kita paksa ganti itu bakalan error
let yourWaNumber = 1;
