var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');
var p1 = lines[0].split(' ')

var a = parseInt(p1[0])
var b = parseInt(p1[1])

if( b % a === 0 || a % b === 0 ){
    console.log('Sao Multiplos')
}else{
    console.log('Nao sao Multiplos')
}