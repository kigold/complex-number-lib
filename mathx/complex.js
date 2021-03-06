var Complex = function (real, imag) {
	//initialisation
	this.real = Number(real) || 0;
	this.imag = Number(imag) || 0;

	//Methods

	/*
	toStr method
	This function returns the number in 'a+bi' formatE xample, where real = 3,
	 imginary = 2, this function will return '3+2i'*/
	this.toStr = function(){
		if (this.imag < 0){
			return String(this.real) + this.imag + 'i';
		}

		return this.real + '+' + this.imag + 'i';
	}

	/*
	getValue method
	returns the real number and the imaginary number of the complex number instance

	*/
	this.getValue = function(){
		return {real:this.real,imag:this.imag};
	}

	/*
	add method
	This Function Adds one or more numbers to the Complex number*/
	this.add = function(){
		//get all arguments
		for(var i = 0; i < arguments.length; i++) {
			operand = arguments[i];
			if (operand instanceof Complex) {
				this.real += operand.real;
				this.imag += operand.imag;
			}
			else
				if (typeof operand == 'number' ){
					this.real += operand;
			}
		}
		return this.getValue();
	}

	/*
	subtract method
	This Function Subtracts one or more numbers to the Complex number*/
	this.subtract = function(){
		for(var i = 0; i < arguments.length; i++) {
			operand = arguments[i];
			if (operand instanceof Complex) {
				this.real -= operand.real;
				this.imag -= operand.imag;
			}
			else
				if (typeof operand == 'number' ){
					this.real -= operand;
			}
		}
		return this.getValue();
	}

	/*
	multiply method
	This Function Multiplies another number to the Complex number*/
	this.multiply = function(){
		for(var i = 0; i < arguments.length; i++) {
			operand = arguments[i];
			if (operand instanceof Complex) {
				var temp = this.real * operand.imag;
				temp += (this.imag * operand.real);
				this.real *= operand.real 
				this.real += (this.imag * operand.imag * (-1));
				this.imag = temp;
				
			}
			else
				if (typeof operand == 'number' ){
					this.real *= operand;
					this.imag *= operand
					
			}
		}
		return this.getValue();	
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
			return this.getValue();

		}
		else
			if (typeof operand == 'number'){
				this.real /= operand;
				this.imag /= operand;
				return this.getValue();
			}
	}

	/*
	conjugate method
	This Function returns the conjugate of instance of the number without altering the value
	*/
	this.conjugate = function() {
		//this returns the conjugate, (multiplies the imaginary part by -1)
		return {real:this.real,imag:this.imag*-1};
	}
		
	/*
	magnitude method
	This Function returns the magnitude of the number instance
	*/
	this.magnitude = function() {
		//this returns the magitude of the complex number instance
		return Math.sqrt((this.real*this.real) + (this.imag*this.imag));
	}

	/*
	isEqual method
	This Function campares two complex numbers based on their real and imaginary number
	*/
	this.isEqual = function() {
		var result = true;
		//get all arguments
		for(var i = 0; i < arguments.length; i++) {
			operand = arguments[i];
			if (operand instanceof Complex) {
				if (this.real != operand.real) {
					return false;
				}
				if (this.imag != operand.imag) {
					return false;
				}

			}
			else
				if ((typeof operand == 'number') && (this.imag === 0) && (this.real === operand) ){
					continue;
			}
			else
				{result = false;}
		}
		return result;
	}

}
module.exports = Complex;
