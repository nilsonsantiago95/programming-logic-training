const readline = require('readline-sync')

let values = []

for(let i=1; i<=4; i++) {
    values.push(Number.parseInt(readline.question(`Informe o ${i}° valor: `)))
}

let [a, b, c, d] = values

if(b > c && d > a && (c+d) > (a+b) && c > 0 && d > 0 && a % 2 === 0) {
    console.log("Valores aceitos")
} else {
    console.log("Valores não aceitos")
}