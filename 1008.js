var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseInt(lines[0])
var b = parseInt(lines[1])
var c = parseFloat(lines[2])

var x = (b*c).toFixed(2)
console.log(`NUMBER = ${a}`)
console.log(`SALARY = U$ ${x}`)