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



		


}
module.exports = Complex;