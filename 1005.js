var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])
var ap = 3.5
var bp = 7.5

var y = (((ap*a)+(bp*b))/(ap+bp)).toFixed(5)

console.log(`MEDIA = ${y}`)

