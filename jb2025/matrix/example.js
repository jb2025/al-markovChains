// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0, 0, 0], 
					 [0.5, 0, 0.5, 0],
					 [0, 0.5, 0, 0.5],
					 [0,0,0,1]]);
print(p);
var v = math.matrix([0, 1, 0, 0]);

// the matrix can be retrieved using valueOf()
console.log('retrieve matrix data');
var array = p.valueOf();
print(array);

// matrices can be cloned
console.log('matrices can be cloned');
var clone = p.clone();
print(clone);

// matrix multiplication
console.log('matrix multiplication');

function power (x, matrix){
	var result = math.multiply(matrix, matrix);
	x -= 1;
	for(var i=0; i<=x; i++){
	result = math.multiply(result, matrix);
	}
	return result;
}
var markov = math.multiply(v, p);
markov = power(50,p);

print(markov);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}