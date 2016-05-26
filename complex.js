var Complex = function (real, imag) {
	//initialisation
	this.real = real || 0;
	this.imag = imag || 0;

	//Methods

	/*
	get method
	This function returns the number in 'a+bi' formatE xample, where real = 3,
	 imginary = 2, this function will return '3+2i'*/
	this.get = function(){
		if (this.imag < 0){
			return String(this.real) + this.imag + 'i';
		}

		return this.real + '+' + this.imag + 'i';
	}

	/*
	result method
	returns the real number and the imaginary number of the complex number instance
	to a function call*/
	this.result = function(){
		return {real:this.real,imag:this.imag};
	}

	/*
	add method
	This Function Adds another number to the Complex number*/
	this.add = function(operand){
		if (operand instanceof Complex) {
			this.real += operand.real;
			this.imag += operand.imag;
			return this.result();
		}
		else
			if (typeof operand == 'number' ){
				this.real += operand;
				return this.result();
		}
	}

	/*
	subtract method
	This Function Subtracts another number to the Complex number*/
	this.subtract = function(operand){
		if (operand instanceof Complex) {
			this.real -= operand.real;
			this.imag -= operand.imag;
			return this.result();
		}
		else
			if (typeof operand == 'number' ){
				this.real -= operand;
				return this.result();
		}
	}

	/*
	multiply method
	This Function Multiplies another number to the Complex number*/
	this.multiply = function(operand){
		if (operand instanceof Complex) {
			
			var temp = this.real * operand.imag;
			temp += (this.imag * operand.real);
			this.real *= operand.real 
			this.real += (this.imag * operand.imag * (-1));
			this.imag = temp;
			return this.result();
		}
		else
			if (typeof operand == 'number' ){
				this.real *= operand;
				this.imag *= operand
				return this.result();
		}
	}

	/*
	divide method
	This Function divides the complex number by another number
	*/
	this.divide = function(operand){
		//checks if operand is a complex number
		if (operand instanceof Complex) {
			//creates the conjugate of the operator
			var multiplier = new Complex(operand.conjugate().real, operand.conjugate().imag);
			var temp1  = new Complex(this.real, this.imag);
			temp1.multiply(multiplier);
			var temp2 = new Complex(operand.real, operand.imag);
			temp2.multiply(multiplier);
			this.real = temp1.real/temp2.real;
			this.imag = temp1.imag/temp2.real;
			return this.result();

		}
		else
			if (typeof operand == 'number'){
				this.real /= operand;
				this.imag /= operand;
				return this.result();
			}
	}

	/*
	conjugate method
	This Function returns the conjugate of instance of the number without altering the value
	*/
	this.conjugate = function(){
		//this returns the conjugate of the complex number
		return {real:this.real,imag:this.imag*-1};
	}
		
	/*
	absolute method
	This Function returns the absolute value of the number instance
	*/
	this.magnitude = function(){
		//this returns the magitude of the complex number instance
		return Math.sqrt((this.real*this.real) + (this.imag*this.imag));
	}


}
module.exports = Complex;