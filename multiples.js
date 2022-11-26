const readline = require('readline-sync')

let a = Number.parseInt(readline.question("Informe o 1° valor: "))
let b = Number.parseInt(readline.question("Informe o 2° valor: "))

if(a % b === 0) {
    console.log("São múltiplos")
} else {
    console.log("Não são múltiplos")
}