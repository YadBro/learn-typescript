// ini sama seperti inheritance pada oop

interface HasName {
  name: string
}

interface HasPassword extends HasName {
  password?: string
}


let andri: HasPassword = {
  name: 'Andri Sukma',
  password: 'andri ganteng pisan',
}

console.log(andri);

enum Gender {Male = 'Male', Female = 'Female'}

interface StudentIndentity {
  nik: number;
}

interface StudentCard {
  numberCard: number
}

interface Students extends StudentIndentity, StudentCard {
  name: string,
  age: number,
  gender: Gender,
}

// Mesti di ingat interface hanya bisa mengextends sebuah interface lainnya saja tidak dengan yang lain seperti enum dll.
// Tetapi untuk property bisa di combine dengan enum

let udin: Students = {
  name: 'Udin Terpesona',
  age: 15,
  // gender: 'Male', // ini akan error karena tipe data gender sudah di combine dengan enum Gender
  gender: Gender.Male, // success
  nik: 213123,
  numberCard: 123213,
}

console.log(udin);