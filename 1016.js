var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseInt(lines[0])

var x = a * 2

console.log(`${x} minutos`)