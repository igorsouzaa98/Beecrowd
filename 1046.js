var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');
var p1 = lines[0].split(' ')

var inicio = parseInt(p1[0])
var final = parseInt(p1[1])

if(inicio<final){
    var total =  final - inicio
    console.log(`O JOGO DUROU ${total} HORA(S)`)
}else if(inicio>final){
    var total = (24 - inicio) + final
    console.log(`O JOGO DUROU ${total} HORA(S)`)
}else if (inicio === final){
    console.log('O JOGO DUROU 24 HORA(S)')
}