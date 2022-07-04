var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseInt(lines[0])

var h = parseInt(a / 3600)
a = a % 3600

var m = parseInt(a / 60)
a = a % 60

console.log(`${h}:${m}:${a}`)