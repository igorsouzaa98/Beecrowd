var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var i, j

for(i = 1; i < 10; i+=2){
    for(j = 7; j > 4;j--){
        console.log(`I= ${i} J=${j}`)
    }
}