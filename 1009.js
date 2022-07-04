var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseFloat(lines[1])
var b = parseFloat(lines[2])

var x = (a+(b*0.15)).toFixed(2)

console.log(`TOTAL = R$ ${x}`)