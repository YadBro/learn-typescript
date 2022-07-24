// can't stop // jadi bakalan terus menerus si never ini

const fail = (message: string) => {
  throw new Error(message);
}

fail('This is never be long');

const sing = () => {
  while (true) {
    console.log('Neverrr');
    console.log('Neverrr1');
    console.log('Neverrr2');
  }
}
sing();