var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseInt(lines[0])

var notas = [100,50,20,10,5,2,1]

console.log(a)

for(var nota of notas){
    let qntdNotas = parseInt(a / nota)
    nota = nota.toFixed(2)
    console.log(`${qntdNotas} nota (s) de R$ ${nota}`)
   a = a % nota
}