var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var valor = parseFloat(lines[0])

var  notas = [100, 50, 20, 10, 5, 2]
var  cents = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:')
for(var nota of notas){
    var  resNota = (parseInt(valor/nota))
    valor = valor % nota
    console.log(`${resNota} nota(s) de R$ ${nota.toFixed(2)}`)
}
console.log('MOEDAS:')
for(var cent of cents){
    var resCent = (parseInt(valor/cent))
    valor = (valor % cent) + 0.0001
    console.log(`${resCent} moeda(s) de R$ ${cent.toFixed(2)}`)
}