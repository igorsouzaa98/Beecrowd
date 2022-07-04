var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');
var p1 = lines[0].split(' ')

var codigo = parseInt(p1[0])
var qnt = parseInt(p1[1])

if(codigo === 1){
    var total = qnt * 4.0
    console.log(`Total: R$ ${total.toFixed(2)}`)
}else if (codigo === 2){
    var total  = qnt * 4.50
    console.log(`Total: R$ ${total.toFixed(2)}`)
}else if (codigo === 3){
    var total = qnt * 5.00
    console.log(`Total: R$ ${total.toFixed(2)}`)
}else if (codigo === 4){
    var total =  qnt * 2.00
    console.log(`Total: R$ ${total.toFixed(2)}`)
}else if (codigo === 5){
    var total = qnt * 1.50
    console.log(`Total: R$ ${total.toFixed(2)}`)
}