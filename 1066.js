var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var array = [lines[0], lines[1], lines[2], lines[3], lines[4]]
array = array.map(x=>parseInt(x))

var par = 0
var impar = 0
var positivo = 0
var negativo = 0

for(var num of array){
    if(num % 2 ===0){
        par++
    }else {
        impar++
    }
    if(num>0){
        positivo++
    }else if(num<0){
        negativo++
    }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)




