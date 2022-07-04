var input = require('fs').readFileSync('stdin','utf8')
var lines = input.split('\n');

var n = parseInt(lines[0])

for (i = 1; i <= n; i++){
    var [v1,v2, v3] = lines[i].split(' ').map(x=>parseFloat(x))
    var media = ((v1 * 2)+(v2 * 3)+(v3 * 5))/10
    console.log(media.toFixed(1))
}