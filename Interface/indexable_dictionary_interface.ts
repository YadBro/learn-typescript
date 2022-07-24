interface DictionaryStudent { 
  [property: string]: number | string,

  nim: number,
  readonly name: string,
  value: number,
}

let yadi: DictionaryStudent = {
  nim: 1293821038,
  name: 'Yadi Apriyadi',
  value: 100,
  // value: true // ini akan error karena semua isi nilai dari interface DictionaryStudent hanya memperbolehkan number or string.
}

console.log(yadi);

// yadi.name = 'Udin Terpesona' // sekali lagi ini akan error karena tidak bisa di override karena dia readonly