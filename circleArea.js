const readline = require('readline-sync')

let radius = Number.parseFloat(readline.question("Informe o raio: "))
let n = 3.14159
let area = (n * (radius ** 2)).toFixed(4)

console.log(`A = ${area}`)