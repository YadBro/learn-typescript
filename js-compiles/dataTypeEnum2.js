// Tipe data enum di gunakan untuk menyimpan data yang sudah fix tipe datanya tidak boleh
// di ubah lagi
// enum Gender {Male, Female, Unknown}
// let jenisKelamin: Gender = Gender.Male;
// console.log(jenisKelamin);
// Mengubah nilai default
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Unknown"] = -1] = "Unknown";
})(Gender || (Gender = {}));
var jenisKelamin = Gender.Male;
console.log(jenisKelamin);
