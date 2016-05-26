'use strict';

//var Complex = require("../complex");

describe('After Initialisation of Complex Number', function (){
	var complexNumber
	beforeEach(function() {
	    complexNumber = new Complex(3, 2);
	});

		it('should be initialised', function() {
			var number = new Complex();
		   	expect(number.real).toBeDefined();
		   	expect(number.imag).toBeDefined();
	  	});
		
		it('should Have a real number 3', function() {
		    expect(complexNumber.real).toEqual(3);
	  	});

	  	it('should Have an imaginary number 2', function() {
		    expect(complexNumber.imag).toEqual(2);
	  	});
});

describe('Functionality', function (){
	var complexNumber
	beforeEach(function() {
	    complexNumber = new Complex(3, 2);
	});

	  	it('should Add complex number ', function() {
		    expect(complexNumber.add(complexNumber).imag).toEqual(4);
		    expect(complexNumber.real).toEqual(6);
	  	})

	  	it('should Add real number ', function() {
		    expect(complexNumber.add(2).imag).toEqual(2);
		    expect(complexNumber.real).toEqual(5);
	  	})

	  	it('should Subtract complex number ', function() {
		    expect(complexNumber.subtract(new Complex(2,1)).imag).toEqual(1);
		    expect(complexNumber.real).toEqual(1);
	  	})

	  	it('should Subtract complex number ', function() {
		    expect(complexNumber.subtract(new Complex(3,2)).imag).toEqual(0);
		    expect(complexNumber.real).toEqual(0);
	  	})

	  	it('should Subtract complex number ', function() {
		    expect(complexNumber.subtract(new Complex(5,3)).imag).toEqual(-1);
		    expect(complexNumber.real).toEqual(-2);
	  	})

	  	it('should Subtract real number ', function() {
		    expect(complexNumber.subtract(6).imag).toEqual(2);
		    expect(complexNumber.real).toEqual(-3);
	  	})

	  	it('should Multiply complex number ', function() {
		    expect(complexNumber.multiply(new Complex(2,1)).imag).toEqual(7);
		    expect(complexNumber.real).toEqual(4);
	  	})

	  	it('should Multiply complex number ', function() {
		    expect(complexNumber.multiply(new Complex(1,4)).imag).toEqual(14);
		    expect(complexNumber.real).toEqual(-5);
	  	})

	  	it('should Multiply real number ', function() {
		    expect(complexNumber.multiply(6).imag).toEqual(12);
		    expect(complexNumber.real).toEqual(18);
	  	})

	  	it('should Multiply negative real number ', function() {
		    expect(complexNumber.multiply(-4).imag).toEqual(-8);
		    expect(complexNumber.real).toEqual(-12);
	  	})

	  	it('should be divided by complex number ', function() {
	  		complexNumber = new Complex(2,8)
		    expect(complexNumber.divide(new Complex(1,2)).imag).toEqual(0.8);
		    expect(complexNumber.real).toEqual(3.6);
	  	})

	  	it('should be divided by complex number ', function() {
	  		complexNumber = new Complex(3,2)
		    expect(complexNumber.divide(new Complex(4,-3)).imag).toEqual(0.68);
		    expect(complexNumber.real).toEqual(0.24);
	  	})

	  	it('should be divided by complex number ', function() {
	  		complexNumber = new Complex(4,5)
		    expect(complexNumber.divide(new Complex(2,6)).imag).toEqual(-0.35);
		    expect(complexNumber.real).toEqual(0.95);
	  	})

	  	it('should be divided by real number ', function() {
		    expect(complexNumber.divide(2).imag).toEqual(1);
		    expect(complexNumber.real).toEqual(1.5);
	  	})

	  	it('should be equal ', function() {
	  		newNumber = new Complex(3,2);
		    expect(complexNumber).toEqual(newNumber);
	  	})

});

///Calculate