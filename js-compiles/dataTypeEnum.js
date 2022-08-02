// Tipe data enum di gunakan untuk menyimpan data yang sudah fix tipe datanya tidak boleh
// di ubah lagi
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Unknown"] = 2] = "Unknown";
})(Gender || (Gender = {}));
var jenisKelamin = Gender.Male;
console.log(jenisKelamin);
