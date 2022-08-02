"use strict";
let anythingType = () => console.log('Hello Any');
anythingType();
anythingType = 'Not function again';
// anythingType(); // this is error because anythingType variable overrided into string
console.log(anythingType);
anythingType = 5;
console.log(anythingType);
anythingType = true;
console.log(anythingType);
anythingType = false;
console.log(anythingType);
