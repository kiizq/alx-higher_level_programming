#!/usr/bin/node
// script checks if number is an interger
const args = process.argv[2];
const num = parseInt(args);
if (!isNaN(num)) { console.log('My number:  ' + num); }
else { console.log('Not a number'); }
