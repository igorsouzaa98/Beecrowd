var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var p1 = lines[0].split(' ')

var a = parseFloat(p1[0])
var b = parseFloat(p1[1])
var c = parseFloat(p1[2])
var pi = 3.14159

var tri = ((a*c)/2).toFixed(3)
console.log(`TRIANGULO: ${tri}`)

var cir = (pi*(c*c)).toFixed(3)
console.log(`CIRCULO: ${cir}`)

var tra = (((a+b)*c)/2).toFixed(3)
console.log(`TRAPEZIO: ${tra}`)

var qua = (b*b).toFixed(3)
console.log(`QUADRADO: ${qua}`)

var ret = (a*b).toFixed(3)
console.log(`RETANGULO: ${ret}`)