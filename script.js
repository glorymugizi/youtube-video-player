'use strict';

// const menuDisplay = document.querySelector('.menu');
// const rightSection = document.querySelector('.right');
// const overlay = document.querySelector('.overlay');

// menuDisplay.addEventListener('click', function () {
//   rightSection.className = 'hidden';
// });
// // document.querySelector('.menu').textContent = 'navbar';

function run() {
  var foo = 'Foo';
  let bar = 'Bar';
  console.log(foo, bar);
  {
    var moo = 'Mooo';
    let baz = 'Bazz';
    console.log(moo, baz);
  }
  {
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
  }
}

const mySting = 'mugizi glory';
console.log(mySting);
console.log(mySting.length);
console.log(mySting.slice(6, 10));
console.log(mySting.toUpperCase());
console.log(mySting.indexOf('g'));
console.log(mySting.replace('mugizi', 'muruhura'));
