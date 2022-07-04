var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseFloat(lines[0])
var ap = 2
var b = parseFloat(lines[1])
var bp = 3
var c = parseFloat(lines[2])
var cp = 5

var x = (((ap*a)+(bp*b)+(cp*c))/(ap+bp+cp)).toFixed(1)

console.log(`MEDIA = ${x}`)
