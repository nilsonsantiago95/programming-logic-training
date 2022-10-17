const readline = require('readline-sync')


function average(a, b, c) {
    let weightA = 2
    let weightB = 3
    let weightC = 5
    let sumWeight = weightA + weightB + weightC
    let average = ((a * weightA) + (b * weightB) + (c * weightC)) / sumWeight

    return average.toFixed(1)
}

let grades = []
for(let c=1; c <= 3; c++) {
    grades.push(Number.parseFloat(readline.question(`Informe o ${c}° número: `)))
}

console.log(`MÉDIA = ${average(...grades)}`)
