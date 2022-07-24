interface Sum {
  (number1: number, number2: number): number,
}


let add: Sum = (number1, number2) => {
  return number1 + number2;
}

let plus = add(1, 2);
console.log(plus);
