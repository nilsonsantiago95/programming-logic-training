const readline = require('readline-sync')

const difference = (a, b, c, d) => a * b - c * d

let numbers = []
for(let c = 1; c <= 4; c++) {
    numbers.push(Number.parseInt(readline.question(`Informe o ${c}° número: `)))
}

console.log(`DIFERENÇA = ${difference(...numbers)}`)