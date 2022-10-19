const readline = require('readline-sync')

let radius = Number.parseFloat(readline.question("Informe o raio: "))
let pi = 3.14159
let area = (pi * (radius ** 2)).toFixed(4)

console.log(`A = ${area}`)