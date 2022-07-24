type BloodType = 'A' | 'B' | 'O' | 'AB'; // this is not a varible;
type myNumber = 1 | 2 | 3;

function BloodTypeCheck(bt: BloodType) {
  console.log(bt);
  return bt;
}

let myBloodType = BloodTypeCheck("A");
// let yourBloodType: BloodType = 'y'; // wrong because typescript are strongtype language
// dan juga kalo tidak ada nilai yang sudah di set di tipe data custom maka kalo kita paksa ganti itu bakalan error
let yourWaNumber: myNumber = 1;