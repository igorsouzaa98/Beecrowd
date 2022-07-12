var input = require('fs').readFileSync('stdin','utf8')

var count = 1

while(count <= 100){
    if(count % 2 === 0){
        console.log(count)
    }
    count++
}