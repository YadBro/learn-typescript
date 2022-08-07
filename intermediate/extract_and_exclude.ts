namespace Intermediate {
  type Fruits = 'Apple' | 'Banana' | {fruits: true, vegetables?: false}

  // EXTRACT
  type stringFruits = Extract<Fruits, string>;
  type stringFruits2 = Exclude<Fruits, {fruits: true}>;
  
  // EXCLUDE
  type nonStringFruits = Exclude<Fruits, string>;
  type nonStringFruits2 = Extract<Fruits, {fruits: true}>;

  const myStringFruits: stringFruits = 'Apple' || 'Banana';
  const myStringFruits2: stringFruits2 = 'Banana';

  console.log(myStringFruits);
  console.log(myStringFruits2);

  const myObjectFruits: nonStringFruits = {fruits: true, vegetables: false};
  const myObjectFruits2: nonStringFruits2 = {fruits: true};

  console.log(myObjectFruits);
  console.log(myObjectFruits2);

}