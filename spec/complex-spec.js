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

	  	it('should have get method that returns the number as string', function() {
		    expect(complexNumber.toString()).toEqual('3+2i');
	  	});

	  	it('should have get method that returns the number as string correct sign', function() {
		    complexNumber = new Complex(7, -4);
		    expect(complexNumber.toString()).toEqual('7-4i');
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

	  	it('should Add multiple complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.add(a,b);
		    expect(complexNumber.imag).toEqual(11);
		    expect(complexNumber.real).toEqual(12);
	  	})

	  	it('should Add multiple real number ', function() {
	  		complexNumber.add(5, 7);
		    expect(complexNumber.imag).toEqual(2);
		    expect(complexNumber.real).toEqual(15);
	  	})

	  	it('should Add multiple real and complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.add(a,b, 4);
		    expect(complexNumber.imag).toEqual(11);
		    expect(complexNumber.real).toEqual(16);
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

	  	it('should Subtract multiple complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.subtract(a,b);
		    expect(complexNumber.imag).toEqual(-7);
		    expect(complexNumber.real).toEqual(-6);
	  	})

	  	it('should Subtract multiple real and complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.subtract(a,b, 5, -10);
		    expect(complexNumber.imag).toEqual(-7);
		    expect(complexNumber.real).toEqual(-1);
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

	  	it('should Multiply multiple complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.multiply(a,b);
		    expect(complexNumber.imag).toEqual(126);
		    expect(complexNumber.real).toEqual(-58);
		 })

	  	it('should Multiply multiple complex number ', function() {
	  		var a = new Complex(4,2);
	  		var b = new Complex(5,7);
	  		complexNumber.multiply(a,b, 3);
		    expect(complexNumber.imag).toEqual(378);
		    expect(complexNumber.real).toEqual(-174);
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

	  	it('should be divided by complex number ', function() {
	  		complexNumber = new Complex(-6,-3)
		    expect(complexNumber.divide(new Complex(4,6)).imag).toEqual(0.46153846153846156);
		    expect(complexNumber.real).toEqual(-0.8076923076923077);
	  	})

	  	it('should be divided by real number ', function() {
		    expect(complexNumber.divide(2).imag).toEqual(1);
		    expect(complexNumber.real).toEqual(1.5);
	  	})

	  	it('should have conjugate ', function() {
	  		var newNumber = new Complex(3,2);
		    expect(complexNumber.toString()).toEqual(newNumber.toString());
	  	})

	  	it('should have conjugate ', function() {
	  		var newNumber = new Complex(3,-2);
		    expect(complexNumber.conjugate()).toEqual(newNumber.get());
	  	})

	  	it('should have magnitude ', function() {
	  		complexNumber = new Complex(-2,-5);
		    expect(complexNumber.magnitude()).toEqual(5.385164807134504);
	  	})

	  	it('should have magnitude ', function() {
	  		complexNumber = new Complex(-2,4);
		    expect(complexNumber.magnitude()).toEqual(4.47213595499958);
	  	})

	  	it('should have magnitude ', function() {
	  		complexNumber = new Complex(-2,0);
		    expect(complexNumber.magnitude()).toEqual(2);
	  	})

	  	it('should compare two complex numbers  ', function() {
	  		var newNumber = new Complex(3,2);
		    expect(complexNumber.isEqual(newNumber)).toEqual(true);
	  	})

	  	it('should compare two complex numbers  ', function() {
	  		var newNumber = new Complex(3,6);
		    expect(complexNumber.isEqual(newNumber)).toEqual(false);
	  	})

	  	it('should compare multiple complex numbers  ', function() {
	  		var newNumber = new Complex(3,2);
	  		var newNumber2 = new Complex(3,2);
		    expect(complexNumber.isEqual(newNumber, newNumber2)).toEqual(true);
	  	})
});
