var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n')

var p1 = lines[0].split(' ')

var array = p1.map(x=>parseInt(x))

var [a,b,c,d] = array

if(b > c &&  d > a && (c + d) > (a + b) && c > 0 && d > 0 && (a % 2 === 0) ){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}