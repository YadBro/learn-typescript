function notReturn(): void {
  console.log('The void is not returning');
  // return 'Hello' // this is error because void type not allowed function returning a value
}

function canReturn(): any {
  return 'Yes I can return this';
}

let not = notReturn();
let yes = canReturn();

console.log(not); // undefined because this function nothing return value (void)
console.log(yes);