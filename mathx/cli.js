var program = require('commander');
var Complex = require('./complex');
var chalk = require('chalk');

program
	.command('createNumber <name> <real> <imag>')
	.alias('cu')
	.description('method to create complex number')
	.action(function(name, real, imag) {
		var name = new Complex(real, imag);
		console.log(chalk.bold.blue(name.toStr()));

	});


program.parse(process.argv);