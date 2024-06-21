#!/usr/bin/node
/* Get the first argument */
const args = process.argv[2];
const size = parseInt(args); 

	/*Check if the size is a valid integer */
	if (isNaN(size) || size <= 0) {
		    console.log("Missing size");
	} else {
		    /*Use nested loops to print the square */
		    for (let i = 0; i < size; i++) {
			            let row = '';
			            for (let j = 0; j < size; j++) {
					                row += 'X';
					            }
			            console.log(row);
			        }
	}

