const readline = require('readline-sync')

const totalWage = (fixedSalary, salesMade) => {
    let commission = salesMade * (15 / 100)
    let totalToReceive = fixedSalary + commission
    
    return totalToReceive.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

let name = readline.question("Informe o nome do vendedor: ")
let fixedSalary = Number.parseFloat(readline.question("Informe o salário fixo: R$"))
let salesmade = Number.parseFloat(readline.question("Informe os ganhos com as vendas: R$"))

console.log(`TOTAL = ${totalWage(fixedSalary, salesmade)}`)