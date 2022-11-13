const readline = require('readline-sync')

const delta = (a, b, c) => Math.pow(b, 2) - (4 * a * c)

const bhaskara = (a, b, c) => {
    let resDelta = delta(a, b, c)

    if(resDelta < 0 || 2 * a === 0) {
        return "Impossível calcular"
    } else {
        return `R1 = ${((-b + Math.sqrt(resDelta)) / (2 * a)).toFixed(5)}\nR2 = ${((-b - Math.sqrt(resDelta)) / (2 * a)).toFixed(5)}`
    }
}

let values = []

for(let i=1; i <= 3; i++) {
    values.push(Number.parseFloat(readline.question(`Informe o ${i}° valor: `)))
}

let result = bhaskara(...values)

console.log(result)