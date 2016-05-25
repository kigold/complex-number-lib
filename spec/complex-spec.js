'use strict';

//var Complex = require("../complex");

describe('After Initialisation of Complex Number', function (){
	var complexNumber
	beforeEach(function() {
	    complexNumber = new Complex(3, 2);
	});

		it('it should Have a real number 3', function() {
		    expect(complexNumber.real).toEqual(3);
	  	});

	  	it('it should Have an imaginary number 2', function() {
		    expect(complexNumber.imag).toEqual(2);
	  	});
});