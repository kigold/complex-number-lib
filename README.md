#Complex Number Library
This Library is basically a class that models the concept of complex number
  as seen in the fields of Mathematics, Engineering Accounting and the likes.
  In summary, this complex number phenomenon caters for a set of number that 
  cannot be accounted for by the number line, the number line on which you can 
  define numbers such as ;
  *Numbers greater than Zero to the right of zero (Positive Numbers)*
  *Numbers less than Zero to the left of zero (Negative Numbers)*
  *and Zero ('the Yard Stick')*
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
2. open the 'SpecRunner.html' with your browser.

These tests basically tests all the functionality of the Class
You can add to the test cases by editing the './spec/complex-spec.js' file

###Deployment
Look at installation.

###Built With
node.js
chalk




  


