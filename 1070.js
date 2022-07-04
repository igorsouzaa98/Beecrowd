var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var a = parseInt(lines[0])

count = 0

while (count<6){
    if(a % 2 !==0){
        console.log(a)
        count++
    }
    a++
}