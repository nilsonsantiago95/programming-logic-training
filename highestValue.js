const readline = require('readline-sync')

const heighestValue = (a, b, c) => {
    let heighest = a
    if(b > a && b > c) {
        heighest = b
    } else if(c > b && c > a) {
        heighest = c
    }

    return heighest
}

let values = []
for(let c=1; c <= 3; c++) {
    values.push(Number.parseFloat(readline.question(`Informe o ${c}° valor: `)))
}

console.log(heighestValue(...values))