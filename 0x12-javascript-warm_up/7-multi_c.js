#!/usr/bin/node
/* this scrips prinyts a test x nuber of times an argument is set */
const args = process.argv[2];
const num = parseInt(args);
if (!isNaN(num)) {
	const x = 'C is fun';
	if(num > 0) {
		for (let i = 0; i < num; i++) {
		console.log(x);
		}
	}
}
else {
	console.log('Missing number of occurrences');
}
