const readline = require('readline-sync')

let axes = []

for(let i=1; i <= 2; i++) {
    axes.push(Number.parseFloat(readline.question(`Informe o ${i}° eixo: `)))
}

let [x, y] = axes

if(x > 0 && y > 0) {
    console.log("Q1")
} else if(x < 0 && y > 0) {
    console.log("Q2")
} else if(x < 0 && y < 0) {
    console.log("Q3")
} else if(x > 0 && y < 0) {
    console.log("Q4")
} else {
    console.log("Origem")
}