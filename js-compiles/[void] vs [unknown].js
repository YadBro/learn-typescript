"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
function theVoid() { (0, console_1.log)('Hello World'); }
;
(0, console_1.log)('Hello');
let theUknown;
let theAny;
// theVoid = true;
console.log(theVoid);
theUknown = true;
theUknown.hello('tes');
console.log(theUknown);
theAny.bla.bla.uwuhgaming.Asiap = 'Hello'; // any bisa mengoverride apa saja tetapi hasilnya bakalan error. kayak seperti ini
console.log(theAny);
