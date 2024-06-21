#!/usr/bin/node
/* script adds two argument inputs */
function add (a, b) {
  return a + b;
}
const fa = process.argv[2];
const sa = process.argv[3];
const a = parseInt(fa);
const b = parseInt(sa);
if (isNaN(a) || isNaN(b)) {
  console.log('NaN');
} else {
  console.log(add(a, b));
}
