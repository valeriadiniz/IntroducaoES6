'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
//true

console.log(myText.constructor === String);
//true
