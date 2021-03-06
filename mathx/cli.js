'use strict';

var vorpal = require('vorpal')();
var Complex = require('./complex');
var chalk = require('chalk');


//This Fucntion splits strings complex number to its components
var complex_parse = function(string) {
	var real, imag, regex, match, a, b, c;
	var real_parity= 1, imag_parity = 1;
	//check if imaginary number is positive or negative
	if (string.indexOf('-') >= 0){
		if (String(string).indexOf('-') == 0) {
			real_parity= (-1);
			if (string.indexOf('-',1) > 0)  {
				imag_parity = (-1);
			}
		}
		if (string.indexOf('-') > 0) {
			imag_parity = (-1);
		}
	}

	regex = /^([-+]?(?:\d+|\d*\.\d+))?[-+]?(\d+|\d*\.\d+)?[ij]$/i;
	string = String(string).replace (/\s+/g, '');

	match = string.match (regex);
	if (!match) {
		//throw new Error("Invalid input to Complex.parse, expecting a + bi format");
		console.log("Invalid User Input");
		return new Complex();
	}

	a = match[1];
	b = match[2];
	c = match[3];

	real = a != null ? parseFloat (a) : 0;
	imag = parseFloat ((b || "+") + (c || "i"));

	//check if imaginary number is positive or negative
	real*= real_parity;
	imag *= imag_parity
	
	return new Complex(real, imag);
};
/////

///add
vorpal.command('add [numbers...]', 'Adds numbers together')
.alias('add')
.action(function (args, cb) {
	var numbers = args.numbers;
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += parseFloat(numbers[i]);

	}
	this.log(sum);
	cb(undefined, sum);
});

///add complex numbers 
vorpal.command('adc [numbers...]', 'Adds complex numbers together')
.alias('adc')
.action(function (args, cb) {
	var numbers = args.numbers;
	var sum = 0;
	var numb = new Complex(0,0);
	for (var i = 0; i < numbers.length; i++) {
		numb.add(new Complex(Number(complex_parse(numbers[i]).real), 
				Number(complex_parse(numbers[i]).imag)));

		sum = numb.toStr();

	}
	this.log(sum);
	cb(undefined, sum);
});

///subtract complex numbers
vorpal.command('sub [numbers...]', 'Subtracts complex numbers together')
.alias('sub')
.action(function (args, cb) {
	var numbers = args.numbers;
	var sum = 0;
	var numb = new Complex(complex_parse(numbers[0]).real, 
				complex_parse(numbers[0]).imag);
	for (var i = 1; i < numbers.length; i++) {
		numb.subtract(new Complex(Number(complex_parse(numbers[i]).real), 
				Number(complex_parse(numbers[i]).imag)));

		sum = numb.toStr();

	}
	this.log(sum);
	cb(undefined, sum);
});

///multiply complex numbers
vorpal.command('multiply [numbers...]', 'multiplies complex numbers together')
.alias('mlt')
.action(function (args, cb) {
	var numbers = args.numbers;
	var sum = 0;
	var numb = new Complex(complex_parse(numbers[0]).real, 
				complex_parse(numbers[0]).imag);
	for (var i = 1; i < numbers.length; i++) {
		numb.multiply(new Complex(Number(complex_parse(numbers[i]).real), 
				Number(complex_parse(numbers[i]).imag)));

		sum = numb.toStr();

	}
	this.log(sum);
	cb(undefined, sum);
});

///divide complex numbers
vorpal.command('divide [numbers...]', 'divides complex one complex nu\
	mber from another')
.alias('div')
.action(function (args, cb) {
	var numbers = args.numbers;
	var sum = 0;
	var numb = new Complex(complex_parse(numbers[0]).real, 
				complex_parse(numbers[0]).imag);
	for (var i = 1; i < numbers.length; i++) {
		numb.divide(new Complex(Number(complex_parse(numbers[i]).real), 
				Number(complex_parse(numbers[i]).imag)));

		sum = numb.toStr();

	}
	this.log(sum);
	cb(undefined, sum);
});

///magnitude of complex numbers
vorpal.command('magnitude [number]', 'claculates the magnitude of a complex number')
.alias('mag')
.action(function (args, cb) {
	var number = args.number;
	var numb = new Complex(complex_parse(number).real, 
				complex_parse(number).imag);
	var sum = numb.magnitude();
	this.log(sum);
	cb(undefined, sum);
});

///conjugate of complex numbers
vorpal.command('conjugate [number]', 'derives the conjugate of a complex number')
.alias('cju')
.action(function (args, cb) {
	var number = args.number;
	var numb = new Complex(complex_parse(number).real, 
				complex_parse(number).imag);
	var sum = numb.conjugate();

	if (sum.imag < 0){
			sum = String(numb.real) + '-' + numb.imag + 'i';
		}
	else {
		sum = numb.real + '+' + numb.imag*-1 + 'i';
		}
	
	this.log(sum);	
	cb(undefined, sum);
});





vorpal.command('args [items...]', 'Shows args.')
  .option('-d')
  .option('-a')
  .option('--save')
  .action(function (args, cb) {
    this.log(args);
    cb();
  });

vorpal
  .delimiter('Complex Number Calc:')
  .show()
  .parse(process.argv);