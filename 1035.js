var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');
var p1 = lines[0].split(' ')

var array = p1.map(x=>parseInt(x))
//var a = parseInt(p1[0])
//var b = parseInt(p1[1])
//var c = parseInt(p1[2])
//var d = parseInt(p1[3])

var [a,b,c,d] = array

if(b > c &&  d > a && (c + d) > (a + b) && c > 0 && d > 0 && (a % 2 === 0) ){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}