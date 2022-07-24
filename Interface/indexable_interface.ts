// Untuk menentukan tipe data pada setiap index array
interface indexStringArray {
  [index: number]: string,
}

let array: indexStringArray = ['Hello', 'World'];
console.log(array);

interface indexNumberArray {
  [property: string]: number,
}

let bilangan: indexNumberArray = {
  "number1" : 1,
  "number2" : 5,
}

console.log(bilangan);