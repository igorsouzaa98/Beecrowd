var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var array = lines.map(x=>parseInt(x))


count = 0

for (var num of array){
    var div = (parseInt(num/2))
    if(div%2===0){
        count++
    }
}

console.log(`${count} valores pares`)


