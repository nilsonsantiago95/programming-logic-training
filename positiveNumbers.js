const readline = require('readline-sync')

let value = []

for(let c = 0; c < 6; c++) {
    value.push(Number.parseInt(readline.question("Informe um valor positivo ou negativo: ")))
}

let quantityPositiveNumbers = value.reduce((acc, number) => {
    if(number > 0) {
        return acc + 1
    }
    return acc
}, 0)

console.log(`${quantityPositiveNumbers} valores positivos`)