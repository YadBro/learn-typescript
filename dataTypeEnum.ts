// Tipe data enum di gunakan untuk menyimpan data yang sudah fix tipe datanya tidak boleh
// di ubah lagi

// enum Gender {Male, Female, Unknown} // defaultnya number

// let jenisKelamin: Gender = Gender.Male;
// console.log(jenisKelamin); // hasilnya 0

// Mengubah nilai default
// enum Gender {Male = 1, Female = 2, Unknown = -1}

// let jenisKelamin: Gender = Gender.Male;
// console.log(jenisKelamin); // hasilnya 1

// Mengubah nilai default number menjadi string
enum Category {Grocery = 'GROCERY', Electronic = 'ELECTRONIC', Monitor = 'MONITOR'}

let kategori: Category = Category.Electronic;
console.log(kategori); // hasilnya ELECTRONIC