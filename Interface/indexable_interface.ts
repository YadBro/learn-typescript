// Untuk menentukan tipe data pada setiap index array
interface indexStringArray {
  [index: number]: string,
}

let array: indexStringArray = ['Hello', 'World'];
console.log(array);
const hello = array[0];
console.log(hello);

interface indexNumberArray {
  [property: string]: number,
}

let bilangan: indexNumberArray = {
  "number1" : 1,
  "number2" : 5,
  // 2: 'asiap' // ini error
}

console.log(bilangan);