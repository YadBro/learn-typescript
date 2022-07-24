// Data type Union is merger from different type or multiple type

let whoAmI: number | string = 40;
console.log(whoAmI)
whoAmI = 'I am a string';
console.log(whoAmI) // correct
whoAmI = false;
console.log(whoAmI) // not true