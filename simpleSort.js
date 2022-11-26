const readline = require('readline-sync')

let values = []

for(let i = 1; i <= 3; i++) {
    values.push(Number.parseInt(readline.question(`Informe o ${i}° valor: `)))
}

let oldOrder = [...values]

console.log(values.sort((a, b) => a - b))

console.log(oldOrder)