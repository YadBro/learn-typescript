import {log} from 'console';
function theVoid(): void{ log('Hello World')};
log('Hello');
let theUknown: unknown;
let theAny: any;

// theVoid = true;
console.log(theVoid);
theUknown = true;
theUknown.hello('tes');
console.log(theUknown);
theAny.bla.bla.uwuhgaming.Asiap = 'Hello'; // any bisa mengoverride apa saja tetapi hasilnya bakalan error. kayak seperti ini
console.log(theAny);