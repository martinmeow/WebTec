/** FizzBuzz */
let str = "";
for (let index = 1; index <= 100; index++) {
	const prev = str.length;
	if (index % 3 === 0) str += "Tic";
	if (index % 5 === 0) str += "Tac";
	if (prev === str.length) str += index;
	str += " ";
}

console.log(str);
