var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var n = 3.14159
var r = parseFloat(lines[0])

var b = (r*r)
var a = (n * b).toFixed(4)

console.log(`A=${a}`)