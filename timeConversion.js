const readline = require('readline-sync')

let seconds = Number.parseInt(readline.question("Informe o tempo em segundos: "))

let hour = (seconds / 3600).toFixed(0)
let minute = ((seconds % 3600) / 60).toFixed(0)
let second = (seconds % 60).toFixed(0)

console.log(`${hour}:${minute}:${second}`)