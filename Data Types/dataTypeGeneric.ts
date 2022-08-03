/*

  TIPE DATA DINAMIS (GENERIC)

 Tipe data generic sesuai namanya yaitu generic atau membuat secara otomatis tipe data
 ketika si object tersebut di panggil atau di instance.
*/

function apaAja(name: any) {
  return name;
}

console.log(apaAja('yadi').length);
console.log(apaAja(12).length); // ini bakalan hasilnya undefined karena property length tidak ada pada tipe data number tetapi tidak juga menghasilkan error

// SOLUSINYA bisa pake generic type

// huruf T di sini bebas mau apa tapi pada umumnya orang orang buat pake huruf T.
// Dan kalo seperti ini, ini akan mengikuti tipe dari pada saat memanggil function ini.
function opoOjo<T>(name: T) {
  return name;
}

console.log(opoOjo('Yadi').length) // string
// console.log(opoOjo(6).length) // number, Nah kalian bisa liat sekarang ini error
console.log(opoOjo(6).valueOf()) // number

