'use strict';

var vorpal = require('vorpal')();
var Complex = require('./complex');
var chalk = require('chalk');


//This Fucntion splits strings complex number to its components
var complex_parse = function(string) {
	var real, imag, regex, match, a, b, c;
	var store_string = string;

	regex = /^([-+]?(?:\d+|\d*\.\d+))?[-+]?(\d+|\d*\.\d+)?[ij]$/i;
	string = String(string).replace (/\s+/g, '');

	match = string.match (regex);
	if (!match) {
		throw new Error("Invalid input to Complex.parse, expecting a + bi format");
	}

	a = match[1];
	b = match[2];
	c = match[3];

	real = a != null ? parseFloat (a) : 0;
	imag = parseFloat ((b || "+") + (c || "i"));

	//check if imaginary number is positive or negative
	if (store_string.indexOf('-')>1)
		{} //imag *= (-1);}

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



///double
vorpal.command('double [values...]', 'Doubles a value on each tab press')
  .autocompletion(function (text, iteration, cb) {
    if (iteration > 1000000) {
      cb(undefined, ['cows', 'hogs', 'horses']);
    } else {
      var number = String(text).trim();
      if (!isNaN(number)) {
        number = (number < 1) ? 1 : number;
        cb(undefined, 'double ' + number * 2);
      } else {
        cb(undefined, 'double 2');
      }
    }
  })
  .action(function (args, cb) {
    cb();
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