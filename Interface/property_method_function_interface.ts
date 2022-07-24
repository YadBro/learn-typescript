interface Human {
  name: string,
  sayGoodByeFrom(name: string): string,
}

let humanoid: Human = {
  name: 'Andri',
  sayGoodByeFrom(name) {
    return `Hello ${name}, Goodbye ${this.name}`;
  }
}

let goodByeFromBambang = humanoid.sayGoodByeFrom('Bambang'); // Hello Bambang, Goodbye Andri
console.log(goodByeFromBambang);

let bambang = humanoid.name = 'Bambang';
let goodbyeFromYadi = humanoid.sayGoodByeFrom('Yadi');
console.log(bambang); // Yadi
console.log(goodbyeFromYadi); // Hello Yadi, Goodbye Bambang