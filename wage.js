const readline = require('readline-sync')

const showWage = (number, workedHours, hourlyPay) => {
    let wage = (workedHours * hourlyPay).toLocaleString('pt-br', {style:'currency', currency:'BRL'})
    return `Number = ${number}\nWage = ${wage}`
} 

let number = Number.parseInt(readline.question("Informe o número do funcionário: "))
let workedHours = Number.parseInt(readline.question("Informe o total de horas trabalhadas: "))
let hourlyPay = Number.parseFloat(readline.question("Informe o quanto o funcionário recebe por hora: "))

console.log(showWage(number, workedHours, hourlyPay))