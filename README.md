#Complex Number Library
This Library is basically a class that models the concept of complex number
as seen in the fields of Mathematics, Engineering Accounting and the likes.
In summary, this complex number phenomenon caters for a set of number that 
cannot be accounted for by the number line, the number line on which you can 
define numbers such as ;
1. Numbers greater than Zero to the right of zero (Positive Numbers)
2. Numbers less than Zero to the left of zero (Negative Numbers)
3. and Zero ('the Yard Stick')
in brief, the square root of minus one (-1) was not accommodated by this system, it seemed to be on another axis entirly. [read more on wiki] (https://en.wikipedia.org/wiki/Complex_number).
This class implements an instance of this complex number, and provides basic mathematical operations on it;
*Addition*
*Subtraction*
*Multiplication*
*and Division*

###Getting Started
This Library comes in a mathx package, it can be downloaded by cloning this repository.
This project can be useful in different ways
Note: To utilise the Console User Interface node.js is required

###Prerequesites
```
Node.js
npm
```

###Installation
Node.js and npm are required to use the Console User Interface, follow these steps:
1. Clone this repository
2. cd into the repository directory
3. ```npm install -g ```
4. When the installation of dependecies are complete type ``` node complex```
5 follow the prompt

To use without node:
1. Clone this repository
2. copy the complex.js file from the ``` ./bin/complex.js ``` into any directory you need it*
3. if it is a web based project, just include the script tag
```html
<script src="complex.js"></script>
```

To add to another project in node:

1. Clone this repository
2. locate the ```./bin/complex.js```
3. copy the complex.js file to a directory in your project that you are convinient with
4. In the project file you need the Class, type
```javascript
var Complex = require('./complex')
```
5. Insert the correct directory path depending on where you copy the file

###Runing the tests
Test are run using Jasmine.
The test can be carried out using node.js or using a web browser
#####Running test using node to run Jasmine
This option is posible only if you have node and npm installed, and cloned the entire repository
1. cd into the repository directory
2. type ``` npm install -g```
2. type  ``` jasmin-node spec``` this should reference the spec directory containing the complex-spec.js file
#####Running test via web browser
1. From the repository download, copy all files into your project root directory ('what you actually need are, lib, spec, and SpecRunner.html)
2.Comment the first line in the 'complex-spec.js file' 
```javascript
//var Complex = require("../complex");
```
3. open the 'SpecRunner.html' with your browser.

These tests basically tests all the functionality of the Class
You can add to the test cases by editing the './spec/complex-spec.js' file

###Deployment
Look at installation.

###Built With
node.js
chalk

### Class Methods
####Initialisation
A complex number is created as follows
```javascript
var myComplexNumber = new Complex(3,2);
```
####Add
This function Adds a number(s) to the instance of Complex number.
#####<parameters>
it accepts parameters of type 'number' or an object of Complex number. It can accept multiple arguments of these types. It does not support string input
#####<output>
It returns the result of the addition performed,that is the state of the number after the addition operation.
it returns and object with two key-value pair, real and imag
```javascript 
var myNumber = new Complex(3,2),
cNum1 = new Complex(3,2),
cNum2 = new Complex(2,2),
num = 4;
myNumber.add(cNum1,cNum2, 4)
//returns {real:12, imag:6}
```
####Subtract
This function Subtracts a number(s) from the instance of Complex number.
#####<parameters>
it accepts parameters of type 'number' or an object of Complex number. It can accept multiple arguments of these types. It does not support string input
#####<output>
It returns the result of the subtraction performed,that is the state of the number after the subtraction operation.
it returns and object with two key-value pair, real and imag
```javascript 
var myNumber = new Complex(3,2),
cNum1 = new Complex(3,2),
cNum2 = new Complex(2,2),
num = 4;
myNumber.subtract(cNum1,cNum2, 4)
//returns {real:-6, imag:-2}
```
####Multiply
This function Multiplies a number to the instance of Complex number.
#####<parameters>
it accepts parameters of type 'number' or an object of Complex number. It does not support string input.
#####<output>
It returns the result of the Multiplication performed,that is the state of the number after the Multiplication operation.
it returns and object with two key-value pair, real and imag
```javascript 
var myNumber = new Complex(3,2),
cNum1 = new Complex(2,1),
num = 4;
myNumber.multiply(cNum1)
//returns {real:4, imag:7}
myNumber.multiply(num)
//returns {real:16, imag:42}
```
####Divide 
This function divides the instance of the Complex number with a number.
#####<parameters>
it accepts parameters of type 'number' or an object of Complex number. It does not support string input.
#####<output>
It returns the result of the Division performed,that is, the state of the number after the Division operation.
it returns and object with two key-value pair, real and imag
```javascript 
var myNumber = new Complex(2,8),
cNum1 = new Complex(1,2);
myNumber.divide(cNum1)
//returns {real:3.6, imag:0.8}
```
####Conjugate
This Function returns the conjugate of instance of the number without altering the value. Conjugate being the imaginary part multiplied by (-1)
#####<parameters>
null, it accepts no argument
#####<output>
It returns the Conjugate of the instance of the  Complex number.
it returns and object with two key-value pair, real and imag
```javascript 
var myNumber = new Complex(2,8),
myNumber.conjugate()
//returns {real:2, imag:-8}
```
####Magnitude
This Function returns the magnitude of of the Complex number instance, that is, square root of the (real + imainary)
#####<parameters>
null, it accepts no argument
#####<output>
It returns the Magitude of the instance of the  Complex number.
it returns a Number
```javascript 
var myNumber = new Complex(2,8);
myNumber.magnitude();
//returns 8.246
```
####isEqual
This Function compares the an instance of the Complex number object to another and returns a boolean
#####<parameters>
An instance of the Complex number 
#####<output>
It returns a boolean
```javascript 
var myNumber = new Complex(2,8),
cNum1 = new Complex(1,2);
myNumber.isEqual(cNum1);
//returns false
```
####toStr
This Function returns a string of the instance of the Complex Number in this formate  ``` 3+4i``` 
#####<parameters>
null, it accepts no argument 
#####<output>
it returns a string 
```javascript 
var myNumber = new Complex(2,8);
myNumber.toStr();
//returns '2+8i'
```
####getVal
returns the real number and the imaginary number of the complex number instance
      ``` 3+4i``` 
#####<parameters>
null, it accepts no argument 
#####<output>
it returns an object with two key-value pair, real and imag.
it can be obtained with '.' notation
result.real
result.imag
```javascript 
var myNumber = new Complex(2,8);
myNumber.getVal();
//returns {real:this.real,imag:this.imag}
```




  


