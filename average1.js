const readline = require('readline-sync')

function average(a, b) {
    let weightA = 3.5
    let weightB = 7.5
    let sumWeight = weightA + weightB
    let average = ((a * weightA) + (b * weightB)) / sumWeight

    return average.toFixed(5)
}

let grades = []
for(let c=1; c <= 2; c++) {
    grades.push(Number.parseFloat(readline.question(`Informe o ${c}° número: `)))
}

console.log(`MÉDIA = ${average(...grades)}`)