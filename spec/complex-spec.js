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

	  	it('Adding 3+2i to 3+2i the imaginary number supposed to be ', function() {
		    expect(complexNumber.add(complexNumber).imag).toEqual(4);
	  	})

	  	it('Adding 3+2i to 3+2i the real number supposed to be ', function() {
		    expect(complexNumber.add(complexNumber).real).toEqual(6);
	  	})
});