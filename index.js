// ДЗ №1, Магай Василий, 14.11.2021
// npm init
// npm i colors
// node index.js

const params=process.argv.slice(2);

let error=true, a=0, b=0;
if (params.length==2) {
	a = parseInt(params[0]);
	b = parseInt(params[1]);
	if (!(isNaN(a) || isNaN(b) || a<=0 || b<=0 || a>b)) { error=false; }
}

if (error) {
	console.log("Указаны неверные параметры в командной строке");
	console.log("Синтаксис:  node index.js 12 89");
	console.log("(нужно указать два целых положительных числа, первое число должно быть больше второго)");
	return;
}

const colors = require("colors");

function print_coloring(ind, num) {
	if (ind%3==0) 
	{ console.log(colors.red(num)); }
	else if (ind%2==0)
	{ console.log(colors.yellow(num)); }
	else
	{ console.log(colors.green(num)); }
}

console.log("В интервале с", a.toString(), "по", b.toString(), "найдены следующие простые числа:");

let i=a;
let cnt=0; 
while (i<=b) {
	if (i<=3) {
		print_coloring(cnt+=1, i);
	}
	else {
		let lim=parseInt(i/2);
		let j=2;
		let isSimple=true;
		while (j<=lim) {
			if( i%j==0) {
				isSimple=false;
				break;
			}
			j++;
		}
		if (isSimple) {
			print_coloring(cnt+=1, i);
		}
	}
	i++;
}