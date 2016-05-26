var program = require('commander');
var Complex = require('./complex');
var chalk = require('chalk');
var co = require('co');
var prompt = require('co-prompt')

program
	.command('createNumber <n>')
	.alias('cn')
	.description('method to create complex number')
	.action(function(n) {
		co(function*(){
		var real = yield prompt('real: ');
		var imag = yield prompt('imaginary :');
		var numb = new Complex(real, imag);
		//console.log(chalk.bold.blue(numb.toStr()));
		//console.log(chalk.bold.blue(n));
		})

	});

program
	.command('createNumber')
	.alias('ad')
	.description('method to add complex numbers')
	.action(function() {
		co(function*(){
		var real = yield prompt('real: ');
		var imag = yield prompt('imaginary: ');
		var numb = new Complex(real, imag);
		var real = yield prompt('the other number\nreal: ');
		var imag = yield prompt('imaginary: ');
		numb.add(new Complex(real,imag))
		console.log(chalk.bold.blue(numb.toStr()));
		//console.log(chalk.bold.blue(n));
		})

	});

program.parse(process.argv);