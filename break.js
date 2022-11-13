const readline = require('readline-sync')

let value = Number.parseFloat(readline.question("Informe um valor: "))
let breaks = ["[0,25]", "(25,50]", " (50,75]", "(75,100]"]

if(value >= 0.0 && value <= 25.0) {
    console.log(`Intervalo ${breaks[0]}`)
} else if(value > 25.0 && value <= 50.0) {
    console.log(`Intervalo ${breaks[1]}`)
} else if(value > 50.0 && value <= 75.0) {
    console.log(`Intervalo ${breaks[2]}`)
} else if(value > 75.0 && value <= 100) {
    console.log(`Intervalo ${breaks[3]}`)
} else {
    console.log(`Fora de intervalo`)
}