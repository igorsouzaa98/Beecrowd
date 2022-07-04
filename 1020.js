var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var d = parseInt(lines[0])

var a = parseInt(d/365)
d = d % 365
var m = parseInt(d / 30)
d = d % 30

console.log(`${a} ano(s)`)
console.log(`${m} mes(es)`)
console.log(`${d} dia(s)`)
