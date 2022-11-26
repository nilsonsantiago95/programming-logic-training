const readline = require('readline-sync')

let values = []

for(let i = 1; i <= 3; i++) {
    values.push(Number.parseFloat(readline.question(`Informe o ${i}° valor: `)))
}

let [a, b, c] = values

if((a - b) < c && (a + b) > c || (a - c) < b && (a + c) > b || (c - b) < a && (c + b) > a) {
    console.log(`Perímetro = ${a + b + c}`)
} else {
    console.log(`Área = ${1/2 * c * (a + b)}`)
}