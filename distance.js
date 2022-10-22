const readline = require('readline-sync')

let distance = Number.parseInt(readline.question("Informe a distância desejada: "))
let time = distance * 2
console.log(`${time} ${time > 1 ? "minutos" : "minuto"}`)