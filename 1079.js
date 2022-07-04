var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var l1 = lines[1].split(' ')
var l2 = lines[2].split(' ')
var l3 = lines[3].split(' ')

var array1 = l1.map(x=>parseFloat(x))
var [a, b, c] = array1

var array2 = l2.map(x=>parseFloat(x))
var[e, f, g] =  array2

var array3 = l3.map(x=>parseFloat(x))
var[h, i, j]= array3

var media1 = (((2*a)+(3*b)+(5*c))/(2 + 3 + 5)).toFixed(1)
var media2 = (((2*e)+(3*f)+(5*g))/(2 + 3 + 5)).toFixed(1)
var media3 = (((2*h)+(3*i)+(5*j))/(2 + 3 + 5)).toFixed(1)

console.log(media1)
console.log(media2)
console.log(media3)