const readline = require("readline-sync")

let ageInDays = Number.parseInt(readline.question("Informe a idade em dias: "))

let year = (ageInDays / 365).toFixed(0)
let month = ((ageInDays % 365) / 30).toFixed(0)
let days = ((ageInDays % 365) % 30).toFixed(0)

console.log(`${year} ano (s)\n${month} mês (s)\n${days} dia (s)`)